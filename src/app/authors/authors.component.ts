import { AfterContentInit, Component } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { slideInFromLeft, slideInFromRight } from '../shared/animations';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  animations: [slideInFromLeft, slideInFromRight]
})
export class AuthorsComponent implements AfterContentInit {

  authors: any;

  constructor(public pageService: PageService, private http: HttpClient, public translate: TranslateService) { }

 /**
 * Lifecycle hook that is called after Angular has fully initialized
 * the component's content. This method loads the necessary data and
 * registers static elements for animations.
 */
  ngAfterContentInit(): void {
    this.loadData();
    this.registerStaticElements();
  }

/**
 * Asynchronously loads data from a JSON file and assigns it to the
 * authors property. If an error occurs during data loading, it logs
 * the error to the console. After loading the data, it registers the
 * dynamic elements for animations.
 *
 * @returns {Promise<void>} A promise that resolves when the data has been loaded.
 */
  async loadData(): Promise<void> {
    try {
      const data = await firstValueFrom(this.http.get<any>('assets/jsons/authors.json'));
      this.authors = data.authors;
      this.registerDynamicElements();
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
    }
  }

 /**
 * Registers static elements for animations.
 *
 * This method clears the current element states and registers three static
 * elements with IDs 'authorElement0', 'authorElement1', and 'authorElement2'.
 */ 
  registerStaticElements() {
    this.pageService.clearStates();
    for (let i = 0; i < 3; i++) {
      this.pageService.registerElement(`authorElement${i}`);
    }
  }

/**
 * Registers dynamic elements for animations based on the loaded authors data.
 *
 * This method iterates over the authors array and registers elements for each
 * author's name and their books if they have any.
 */
  registerDynamicElements() {
    this.authors.forEach((author: { books: string | any[]; }, index: any) => {
      this.pageService.registerElement(`authorName${index}`);
      if (author.books && author.books.length > 0) {
        this.pageService.registerElement(`authorBooks${index}`);
      }
    });
  }
  
/**
 * Checks if a given URL is an external URL.
 *
 * This method tests if the provided URL starts with 'http://' or 'https://'.
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} True if the URL is external, false otherwise.
 */
  isExternalUrl(url: string): boolean {
    return /^(https?:\/\/)/.test(url);
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
