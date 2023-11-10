import { Component } from '@angular/core';
import { PageService } from '../page-service/page.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-englishbooks',
  templateUrl: './englishbooks.component.html',
  styleUrls: ['./englishbooks.component.scss']
})
export class EnglishbooksComponent {
  
  constructor(private pageService: PageService, public translate: TranslateService) {  }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
