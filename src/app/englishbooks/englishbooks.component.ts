import { Component, OnInit } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-englishbooks',
  templateUrl: './englishbooks.component.html',
  styleUrls: ['./englishbooks.component.scss']
})
export class EnglishbooksComponent implements OnInit {

  englishBooks: any;

  constructor(private pageService: PageService, public translate: TranslateService, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    try {
      const data = await firstValueFrom(this.http.get<any>('assets/jsons/englishbooks.json'));
      this.englishBooks = data.englishBooks;
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
    }
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
