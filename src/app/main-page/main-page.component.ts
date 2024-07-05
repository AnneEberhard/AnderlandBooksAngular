import { AfterContentInit, AfterViewInit, Component, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PageService } from '../shared/services/page-service/page.service';
import { slideInFromLeft, slideInFromRight } from '../shared/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [slideInFromLeft, slideInFromRight]
})

export class MainPageComponent implements AfterContentInit {
  scrollContainer!: HTMLElement;
  
  constructor(public pageService: PageService) { }

  ngAfterContentInit(): void {
   for (let i = 0; i < 8; i++) {
    this.pageService.registerElement(`element${i}`);
  }
    window.onload = () => {
      this.pageService.initElements();
    };
  }

}
