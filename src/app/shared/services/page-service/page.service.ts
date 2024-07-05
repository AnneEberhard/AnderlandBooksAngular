import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  elementStates: { [key: string]: string } = {};
  scrollContainer!: HTMLElement;

  constructor() {
    this.scrollContainer = document.getElementById('contentContainer') as HTMLElement;
    this.scrollContainer.addEventListener('scroll', this.onWindowScroll.bind(this));
  // document.addEventListener('DOMContentLoaded', () => {
  //   this.initElements(); // Initialisiere Elemente nach dem DOMContentLoaded
  // });
   }

   initElements(): void {
    Object.keys(this.elementStates).forEach(elementId => {
      console.log(this.elementStates);
      const element = document.getElementById(elementId);
      if (element) {
        if (this.isElementInViewport(element)) {
          this.elementStates[elementId] = 'visible';
          console.log('visible: ', elementId);
        } else {
          this.elementStates[elementId] = 'hidden';
          console.log('hidden: ', elementId);
        }
      }
    });
  }


  isElementInViewport(el: HTMLElement): boolean {
      const rect = el.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      const vertInView = (rect.top + (rect.height)> 0) && ((rect.bottom - (rect.height)) <= windowHeight);
  
    // console.log(el);
    // console.log('rect.bottom: ', rect.bottom);
    // console.log('window.innerHeight: ', window.innerHeight);
    // console.log('rect.top: ', rect.top);
      return (
        vertInView
      );
  }

  onWindowScroll(): void {
    Object.keys(this.elementStates).forEach(elementId => {
      const element = document.getElementById(elementId);
      if (element) {
        if (this.isElementInViewport(element)) {
          this.elementStates[elementId] = 'visible';
          console.log('visible: ', elementId);
        } else {
          this.elementStates[elementId] = 'hidden';
          console.log('hidden: ', elementId);
        }
      }
    });
  }

  registerElement(elementId: string): void {
    this.elementStates[elementId] = 'hidden';
    //this.initElements(); 
  }

  getElementState(elementId: string): string {
    return this.elementStates[elementId];
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  
//  onWindowScroll2(): void {
//    for (let i = 0; i < 8; i++) {
//      const elementId = `element${i}`;
//      const element = document.getElementById(elementId);
//      if (element) {
//        if (this.isElementInViewport(element)) {
//          this.elementStates[elementId] = 'visible';
//          console.log('visible: ', elementId)
//        } else {
//          this.elementStates[elementId] = 'hidden';
//          console.log('hidden: ', elementId)
//        }
//      }
//    }
//  }

}
