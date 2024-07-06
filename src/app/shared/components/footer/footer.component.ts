import { Component } from '@angular/core';
import { PageService } from '../../services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private pageService: PageService, public translate: TranslateService) {  }

}
