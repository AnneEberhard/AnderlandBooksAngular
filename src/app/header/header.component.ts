import { Component } from '@angular/core';
import { PageService } from '../page-service/page.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private pageService: PageService, public translate: TranslateService) {  }
  
  openMobileMenu() {
    document.getElementById('headerLinkContainerMobile')?.classList.add('easeIn');
    document.getElementById('headerLinkContainerMobile')?.classList.remove('easeOut');
    document.getElementById('burgerMenu')?.classList.add('dNone');
  }

  closeMobileMenu() {
    console.log('close');
    document.getElementById('headerLinkContainerMobile')?.classList.add('easeOut');
    document.getElementById('headerLinkContainerMobile')?.classList.remove('easeIn');
    document.getElementById('burgerMenu')?.classList.remove('dNone');
  }

}
