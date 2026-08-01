import { AfterContentInit,  Component } from '@angular/core';
import { PageService } from '../shared/services/page-service/page.service';
import { fadeIn, slideInFromLeft, slideInFromRight } from '../shared/animations';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ScrollToTopButtonComponent } from '../shared/components/scroll-to-top-button/scroll-to-top-button.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    ScrollToTopButtonComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [slideInFromLeft, slideInFromRight, fadeIn]
})

export class MainPageComponent implements AfterContentInit {
  scrollContainer!: HTMLElement;

  constructor(public pageService: PageService) { }

  /**
   * Lifecycle hook that is called after the component's content has been fully initialized.
   * 
   * This method clears the existing states in the pageService and registers 8 new elements 
   * with IDs in the format `mainElement0` to `mainElement7`.
   */  
  ngAfterContentInit(): void {
    this.pageService.clearStates();
    for (let i = 0; i < 10; i++) {
      this.pageService.registerElement(`mainElement${i}`);
    }
  }

}
