import { AfterContentInit, Component, OnInit } from '@angular/core';
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

  ngAfterContentInit(): void {
    this.loadData();
    this.registerStaticElements();
  }

  async loadData() {
    try {
      const data = await firstValueFrom(this.http.get<any>('assets/jsons/authors.json'));
      this.authors = data.authors;
      this.registerDynamicElements();
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
    }
  }

  registerStaticElements() {
    this.pageService.clearStates();
    for (let i = 0; i < 3; i++) {
      this.pageService.registerElement(`authorElement${i}`);
    }
  }


  registerDynamicElements() {
    this.authors.forEach((author: { books: string | any[]; }, index: any) => {
      this.pageService.registerElement(`authorName${index}`);
      if (author.books && author.books.length > 0) {
        this.pageService.registerElement(`authorBooks${index}`);
      }
    });
  }

  isExternalUrl(url: string): boolean {
    return /^(https?:\/\/)/.test(url);
  }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
