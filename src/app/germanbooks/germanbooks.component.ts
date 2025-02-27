import { AfterContentInit, Component, OnInit } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { fadeIn, slideInFromLeft, slideInFromRight } from '../shared/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-germanbooks',
  templateUrl: './germanbooks.component.html',
  styleUrls: ['./germanbooks.component.scss'],
  animations: [slideInFromLeft, slideInFromRight, fadeIn]
})


export class GermanbooksComponent implements AfterContentInit {

  germanBooks: any;

  constructor(public pageService: PageService, public translate: TranslateService, private http: HttpClient, private route: ActivatedRoute) { }

/**
 * Lifecycle hook that is called after Angular has fully initialized
 * the component's content. This method loads the necessary data and
 * registers static and dynamic elements for animations.
 */
  ngAfterContentInit(): void {
    this.loadData();
    this.registerStaticElements();
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500); // Falls nötig, Zeit erhöhen
      }
    });
  }

 /**
 * Asynchronously loads data from a JSON file containing German books information
 * and assigns it to the childrensBooks property. If an error occurs during data loading,
 * it logs the error to the console. After loading the data, it registers dynamic elements
 * for animations.
 *
 * @returns {Promise<void>} A promise that resolves when the data has been loaded.
 */ 
  async loadData(): Promise<void> {
    try {
      const data = await firstValueFrom(this.http.get<any>('assets/jsons/germanbooks.json'));
      this.germanBooks = data.germanBooks;
      this.registerDynamicElements();
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
    }
  }

/**
 * Registers static elements for animations related to German books.
 *
 * This method clears the current element states and registers three static
 * elements with IDs 'childrensBooksElement0', 'childrensBooksElement1', and 'childrensBooksElement2'.
 */
  registerStaticElements() {
    this.pageService.clearStates();
    for (let i = 0; i < 2; i++) {
      this.pageService.registerElement(`germanBooksElement${i}`);
    }
  }

/**
 * Registers dynamic elements for animations based on the loaded German books data.
 *
 * This method iterates over the childrensBooks array and registers elements for each
 * section title, book cover, and book container text.
 */
  registerDynamicElements() {
    this.germanBooks.forEach((section: any, i: number) => {
      this.pageService.registerElement(section.section);
      section.books.forEach((book: any, j: number) => {
        this.pageService.registerElement(book.id);
        this.pageService.registerElement(`ContainerText${book.id}`);
      });
    });
  }
  

/**
 * Scrolls to a specific section within the page.
 * 
 * This function takes a section ID and uses the PageService to scroll
 * the view to the element with the provided section ID.
 *
 * @param {string} sectionId - The ID of the section to scroll to.
 */
  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
