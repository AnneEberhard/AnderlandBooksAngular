import { Component, OnInit } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors: any;

  constructor(private pageService: PageService, private http: HttpClient, public translate: TranslateService) {  }
  
  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    try {
      const data = await firstValueFrom(this.http.get<any>('assets/jsons/authors.json'));
      this.authors = data.authors;
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
    }
  }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
