import { AfterContentInit, Component, OnInit } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { fadeIn, slideInFromLeft, slideInFromRight } from '../shared/animations';

@Component({
  selector: 'app-childrensbooks',
  templateUrl: './childrensbooks.component.html',
  styleUrls: ['./childrensbooks.component.scss'],
  animations: [slideInFromLeft, slideInFromRight, fadeIn]
})
export class ChildrensbooksComponent implements AfterContentInit{

  childrensBooks: any;

  constructor(public pageService: PageService, public translate: TranslateService, private http: HttpClient) { }

/**
 * Lifecycle hook that is called after Angular has fully initialized
 * the component's content. This method loads the necessary data and
 * registers static and dynamic elements for animations.
 */
  ngAfterContentInit(): void {
    this.loadData();
    this.registerStaticElements();
  }

/**
 * Asynchronously loads data from a JSON file containing children's books information
 * and assigns it to the childrensBooks property. If an error occurs during data loading,
 * it logs the error to the console. After loading the data, it registers dynamic elements
 * for animations.
 *
 * @returns {Promise<void>} A promise that resolves when the data has been loaded.
 */
  async loadData(): Promise<void> {
    try {
      const data = await firstValueFrom(this.http.get<any>('assets/jsons/childrensbooks.json'));
      this.childrensBooks = data.childrensBooks;
      this.registerDynamicElements();
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
    }
  }

/**
 * Registers static elements for animations related to children's books.
 *
 * This method clears the current element states and registers three static
 * elements with IDs 'childrensBooksElement0', 'childrensBooksElement1', and 'childrensBooksElement2'.
 */
  registerStaticElements() {
    this.pageService.clearStates();
    for (let i = 0; i < 3; i++) {
      this.pageService.registerElement(`childrensBooksElement${i}`);
    }
  }

/**
 * Registers dynamic elements for animations based on the loaded children's books data.
 *
 * This method iterates over the childrensBooks array and registers elements for each
 * section title, book cover, and book container text.
 */
  registerDynamicElements() {
    this.childrensBooks.forEach((section: any, i: number) => {
      this.pageService.registerElement(section.section);

      section.books.forEach((book: any, j: number) => {
        this.pageService.registerElement(book.id);
        this.pageService.registerElement(`ContainerText${book.id}`);
      });
    });
  }
}
