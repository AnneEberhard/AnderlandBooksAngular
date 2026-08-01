import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ScrollToTopButtonComponent } from '../shared/components/scroll-to-top-button/scroll-to-top-button.component';


@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    ScrollToTopButtonComponent
  ],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {
  constructor(public translate: TranslateService) {  }

}
