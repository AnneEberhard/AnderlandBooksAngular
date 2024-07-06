import { AfterContentInit, Component, OnInit } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { slideInFromLeft, slideInFromRight } from '../shared/animations';

@Component({
  selector: 'app-englishbooks',
  templateUrl: './englishbooks.component.html',
  styleUrls: ['./englishbooks.component.scss'],
  animations: [slideInFromLeft, slideInFromRight]
})
export class EnglishbooksComponent implements AfterContentInit {

  englishBooks: any;

  constructor(public pageService: PageService, public translate: TranslateService, private http: HttpClient) { }

  ngAfterContentInit(): void {
    this.loadData();
    this.registerStaticElements();
  }

  async loadData() {
    try {
      const data = await firstValueFrom(this.http.get<any>('assets/jsons/englishbooks.json'));
      this.englishBooks = data.englishBooks;
      this.registerDynamicElements();
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
    }
  }

  registerStaticElements() {
    this.pageService.clearStates();
    for (let i = 0; i < 2; i++) {
      this.pageService.registerElement(`englishBooksElement${i}`);
    }
  }

  registerDynamicElements() {
    this.englishBooks.forEach((section: any, i: number) => {
      this.pageService.registerElement(`englishBooksSectionTitle${i}`);
      section.books.forEach((book: any, j: number) => {
        this.pageService.registerElement(`englishBooksCover${i}${j}`);
        this.pageService.registerElement(`englishBooksContainerText${i}${j}`);
      });
    });
  }
  

  getBookFormats(book: any): any[] {
    const formats = book.formats || {};
    return Object.keys(formats).map(format => {
      const formatData = formats[format];
      return {
        label: formatData.title,
        link: formatData.link
      };
    });
  }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
