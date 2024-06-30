import { Component } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {

  constructor(private pageService: PageService, public translate: TranslateService) {  }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
