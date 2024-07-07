import { AfterContentInit, Component } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { fadeIn, slideInFromLeft, slideInFromRight } from '../shared/animations';

@Component({
  selector: 'app-services',
  templateUrl: './offered-services.component.html',
  styleUrls: ['./offered-services.component.scss'],
  animations: [slideInFromLeft, slideInFromRight, fadeIn]
})
export class OfferedServicesComponent implements AfterContentInit {

  constructor(public pageService: PageService, public translate: TranslateService) { }

  /**
   * Lifecycle hook that is called after the component's content has been fully initialized.
   * 
   * This method clears the existing states in the pageService and registers 8 new elements 
   * with IDs in the format `serviceElement0` to `serviceElement7`.
   */
  ngAfterContentInit(): void {
    this.pageService.clearStates();
    for (let i = 0; i < 8; i++) {
      this.pageService.registerElement(`serviceElement${i}`);
    }
  }

}
