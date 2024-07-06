import { AfterContentInit, Component } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-bree-nan',
  templateUrl: './bree-nan.component.html',
  styleUrls: ['./bree-nan.component.scss']
})
export class BreeNanComponent implements AfterContentInit{

  characters: any;

  constructor(public pageService: PageService, public translate: TranslateService, private http: HttpClient) { }

/**
 * Lifecycle hook that is called after Angular has fully initialized
 * the component's content. This method loads the necessary data and
 * scrolls the page to the top.
 */
  ngAfterContentInit(): void {
    this.loadData();
    this.pageService.scrollToTop();
  }

 /**
 * Asynchronously loads data from a JSON file and assigns it to the
 * characters property. If an error occurs during data loading, it
 * logs the error to the console.
 *
 * @returns {Promise<void>} A promise that resolves when the data has been loaded.
 */ 
  async loadData(): Promise<void> {
    try {
      const data = await firstValueFrom(this.http.get<any>('assets/jsons/spiritspersons.json'));
      this.characters = data.characters;
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
    }
  }
}
