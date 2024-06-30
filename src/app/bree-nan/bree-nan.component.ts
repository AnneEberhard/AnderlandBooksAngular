import { Component } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-bree-nan',
  templateUrl: './bree-nan.component.html',
  styleUrls: ['./bree-nan.component.scss']
})
export class BreeNanComponent {

  constructor(private pageService: PageService, public translate: TranslateService, private http: HttpClient) { }
characters: any;

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    try {
      const data = await firstValueFrom(this.http.get<any>('assets/jsons/spiritspersons.json'));
      this.characters = data.characters;
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
    }
  }
  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
