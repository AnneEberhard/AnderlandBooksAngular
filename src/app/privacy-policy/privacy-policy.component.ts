import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ScrollToTopButtonComponent } from '../shared/components/scroll-to-top-button/scroll-to-top-button.component';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    ScrollToTopButtonComponent
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {

  constructor(public translate: TranslateService) {  }

}
