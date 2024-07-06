import { AfterContentInit, Component, OnInit } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { slideInFromLeft, slideInFromRight } from '../shared/animations';

@Component({
  selector: 'app-childrensbooks',
  templateUrl: './childrensbooks.component.html',
  styleUrls: ['./childrensbooks.component.scss'],
  animations: [slideInFromLeft, slideInFromRight]
})
export class ChildrensbooksComponent implements AfterContentInit{

  childrensBooks: any;

  constructor(public pageService: PageService, public translate: TranslateService, private http: HttpClient) { }

  ngAfterContentInit(): void {
    this.loadData();
    this.registerStaticElements();
  }

  async loadData() {
    try {
      const data = await firstValueFrom(this.http.get<any>('assets/jsons/childrensbooks.json'));
      this.childrensBooks = data.childrensBooks;
      this.registerDynamicElements();
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
    }
  }


  registerStaticElements() {
    this.pageService.clearStates();
    for (let i = 0; i < 3; i++) {
      this.pageService.registerElement(`childrensBooksElement${i}`);
    }
  }

  registerDynamicElements() {

    // Durchlaufe die childrensBooks und registriere die dynamischen Elemente
    this.childrensBooks.forEach((section: any, i: number) => {
      // Register section title
      this.pageService.registerElement(`childrensBooksSectionTitle${i}`);

      section.books.forEach((book: any, j: number) => {
        // Register book cover and container text
        this.pageService.registerElement(`childrensBooksCover${i}${j}`);
        this.pageService.registerElement(`childrensBooksContainerText${i}${j}`);
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
