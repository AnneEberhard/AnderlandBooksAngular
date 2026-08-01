import { Component } from '@angular/core';
import { PageService } from '../../services/page-service/page.service';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private pageService: PageService, public translate: TranslateService) {  }

}
