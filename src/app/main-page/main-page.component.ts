import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
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

  /**
   * Lifecycle hook that is called after the component's content has been fully initialized.
   * 
   * This method clears the existing states in the pageService and registers 8 new elements 
   * with IDs in the format `mainElement0` to `mainElement7`.
   */  
  ngAfterContentInit(): void {
    this.pageService.clearStates();
    for (let i = 0; i < 8; i++) {
      this.pageService.registerElement(`mainElement${i}`);
    }
  }

}
