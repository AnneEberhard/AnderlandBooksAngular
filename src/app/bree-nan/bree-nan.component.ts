import { Component } from '@angular/core';
import { PageService } from '../page-service/page.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bree-nan',
  templateUrl: './bree-nan.component.html',
  styleUrls: ['./bree-nan.component.scss']
})
export class BreeNanComponent {
  constructor(private pageService: PageService, public translate: TranslateService) {  }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
