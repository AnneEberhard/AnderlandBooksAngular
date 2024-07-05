import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('slideInFromLeft', [
      state('hidden', style({ transform: 'translateX(-150%)' })),
      state('visible', style({ transform: 'translateX(0)' })),
      transition('hidden => visible', [
        animate('500ms ease-in')
      ])
    ]),
    trigger('slideInFromRight', [
      state('hidden', style({ transform: 'translateX(150%)' })),
      state('visible', style({ transform: 'translateX(0)' })),
      transition('hidden => visible', [
        animate('500ms ease-in')
      ])
    ])
  ]
})

export class MainPageComponent implements AfterViewInit, OnDestroy {
  elementStates: { [key: string]: string } = {};
  scrollContainer!: HTMLElement;

  ngAfterViewInit(): void {
    this.scrollContainer = document.getElementById('contentContainer') as HTMLElement;
    this.scrollContainer.addEventListener('scroll', this.onWindowScroll.bind(this));
    this.onWindowScroll();
  }

  ngOnDestroy(): void {
    this.scrollContainer.removeEventListener('scroll', this.onWindowScroll.bind(this));
  }

  onWindowScroll(): void {
    for (let i = 0; i < 8; i++) {
      const elementId = `element${i}`;
      const element = document.getElementById(elementId);
      if (element) {
        if (this.isElementInViewport(element)) {
          this.elementStates[elementId] = 'visible';
          console.log('visible: ', elementId)
        } else {
          this.elementStates[elementId] = 'hidden';
          console.log('hidden: ', elementId)
        }
      }
    }
  }

  isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const vertInView = (rect.top > 0) && ((rect.bottom - (rect.height / 2)) <= windowHeight);

  // console.log(el);
  // console.log('rect.bottom: ', rect.bottom);
  // console.log('window.innerHeight: ', window.innerHeight);
  // console.log('rect.top: ', rect.top);
    return (
      vertInView
    );
  }


}
