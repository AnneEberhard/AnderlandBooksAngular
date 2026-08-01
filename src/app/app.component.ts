import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundContainerComponent } from './shared/components/background-container/background-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BackgroundContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anderlandbooks';
}