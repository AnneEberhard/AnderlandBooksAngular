import { AfterContentInit, Component, OnInit } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { slideInFromLeft, slideInFromRight } from '../shared/animations';

@Component({
  selector: 'app-germanbooks',
  templateUrl: './germanbooks.component.html',
  styleUrls: ['./germanbooks.component.scss'],
  animations: [slideInFromLeft, slideInFromRight]
})


export class GermanbooksComponent implements AfterContentInit {

  germanBooks: any;

  constructor(public pageService: PageService, public translate: TranslateService, private http: HttpClient) { }

  ngAfterContentInit(): void {
    this.loadData();
    this.registerStaticElements();
  }

  async loadData() {
    try {
      const data = await firstValueFrom(this.http.get<any>('assets/jsons/germanbooks.json'));
      this.germanBooks = data.germanBooks;
      this.registerDynamicElements();
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
    }
  }

  registerStaticElements() {
    this.pageService.clearStates();
    for (let i = 0; i < 2; i++) {
      this.pageService.registerElement(`germanBooksElement${i}`);
    }
  }

  registerDynamicElements() {
    this.germanBooks.forEach((section: any, i: number) => {
      this.pageService.registerElement(`germanBooksSectionTitle${i}`);
      section.books.forEach((book: any, j: number) => {
        this.pageService.registerElement(`germanBooksCover${i}${j}`);
        this.pageService.registerElement(`germanBooksContainerText${i}${j}`);
      });
    });
  }
  
  
  getBookFormats(book: any): any[] {
    if (this.germanBooks) {
      const formats = book.formats || {};
      return Object.keys(formats).map(format => {
        const formatData = formats[format];
        return {
          label: formatData.title,
          link: formatData.link
        };
      });
    } else {
      return [];
    }
  }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }


}
