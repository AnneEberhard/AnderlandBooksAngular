import { Component } from '@angular/core';
import { PageService } from '../page-service/page.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-childrensbooks',
  templateUrl: './childrensbooks.component.html',
  styleUrls: ['./childrensbooks.component.scss']
})
export class ChildrensbooksComponent {
  constructor(private pageService: PageService, public translate: TranslateService) {  }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
