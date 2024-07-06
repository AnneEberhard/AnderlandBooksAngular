import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  elementStates: { [key: string]: string } = {};
  scrollContainer!: HTMLElement;
  selectedBook: any;

  constructor() {
    this.scrollContainer = document.getElementById('contentContainer') as HTMLElement;
    this.scrollContainer.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  clearStates() {
    this.elementStates = {};
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
    const vertInView = (rect.top + (rect.height) > 0) && ((rect.bottom - (rect.height)) <= windowHeight);

    //console.log(el);
    //console.log('rect.top + (rect.height) > 0: ', rect.top + (rect.height));
    //console.log('rect.bottom - (rect.height) < 695: ', rect.bottom - (rect.height));
    //console.log('window.innerHeight: ', window.innerHeight);

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
    console.log('registered: ', elementId);
    this.elementStates[elementId] = 'visible';
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

  /**
  * prevents right click on element to disable download
  * @param {MouseEvent} event rightclick
  */
  preventRightClick(event: MouseEvent) {
    event.preventDefault();
  }


  /**
* shows overlay with book details
* @param {object} book Book Data from the JSON for this specific book
*/
  showOverlay(book: any): void {
    this.selectedBook = book;
    this.scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    this.scrollContainer.classList.add('noScroll');
    this.scrollContainer.removeEventListener('scroll', this.onWindowScroll.bind(this));
    setTimeout(() => {
      this.scrollContainer = document.getElementById('overlay') as HTMLElement;
      this.scrollContainer.addEventListener('scroll', this.onWindowScroll.bind(this));
    }, 0);
  }

  /**
  * closes overlay
  */
  closeOverlay(): void {
    this.selectedBook = null;
    this.scrollContainer.removeEventListener('scroll', this.onWindowScroll.bind(this));
    this.scrollContainer = document.getElementById('contentContainer') as HTMLElement;
    this.scrollContainer.classList.remove('noScroll');
    this.scrollContainer.addEventListener('scroll', this.onWindowScroll.bind(this));
  }
}
