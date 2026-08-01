import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-background-container',
  standalone: true,
  imports: [
    TranslateModule,
  ],
  templateUrl: './background-container.component.html',
  styleUrls: ['./background-container.component.scss']
})
export class BackgroundContainerComponent {

}
