import { AfterContentInit, Component } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { slideInFromLeft, slideInFromRight } from '../shared/animations';

@Component({
  selector: 'app-services',
  templateUrl: './offered-services.component.html',
  styleUrls: ['./offered-services.component.scss'],
  animations: [slideInFromLeft, slideInFromRight]
})
export class OfferedServicesComponent implements AfterContentInit{
  constructor(public pageService: PageService, public translate: TranslateService) {  }


  ngAfterContentInit(): void {
    this.pageService.clearStates();
    for (let i = 0; i < 8; i++) {
      this.pageService.registerElement(`serviceElement${i}`);
    }
  
}

scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
