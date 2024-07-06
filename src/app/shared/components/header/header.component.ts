import { Component } from '@angular/core';
import { PageService } from '../../services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private pageService: PageService, public translate: TranslateService) {  }

/**
 * Opens the mobile menu by adding and removing relevant CSS classes.
 * Adds the 'easeIn' class and removes the 'easeOut' class from the mobile menu container.
 * Hides the burger menu by adding the 'dNone' class.
 */
  openMobileMenu() {
    document.getElementById('headerLinkContainerMobile')?.classList.add('easeIn');
    document.getElementById('headerLinkContainerMobile')?.classList.remove('easeOut');
    document.getElementById('burgerMenu')?.classList.add('dNone');
  }

/**
 * Closes the mobile menu by adding and removing relevant CSS classes.
 * Adds the 'easeOut' class and removes the 'easeIn' class from the mobile menu container.
 * Shows the burger menu by removing the 'dNone' class.
 */
  closeMobileMenu() {
    console.log('close');
    document.getElementById('headerLinkContainerMobile')?.classList.add('easeOut');
    document.getElementById('headerLinkContainerMobile')?.classList.remove('easeIn');
    document.getElementById('burgerMenu')?.classList.remove('dNone');
  }

}
