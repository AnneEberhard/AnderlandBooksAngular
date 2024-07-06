import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  elementStates: { [key: string]: string } = {};
  scrollContainer!: HTMLElement;
  selectedBook: any;

  /**
   * Initializes the PageService.
   *
   * This constructor sets the scroll container to the element with the ID 'contentContainer' and
   * adds an event listener to handle scroll events.
   */
  constructor() {
    this.scrollContainer = document.getElementById('contentContainer') as HTMLElement;
    this.scrollContainer.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  /**
   * Clears the state of all registered elements.
   *
   * This method resets the elementStates object, effectively clearing any visibility states
   * that have been tracked.
   */
  clearStates() {
    this.elementStates = {};
  }

  /**
   * Initializes the visibility states of all registered elements.
   *
   * This method iterates over the elementStates object, checks if each element is in the viewport,
   * and updates its visibility state accordingly.
   */
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

  /**
   * Checks if an element is within the viewport.
   *
   * This method calculates the position of the element relative to the viewport and
   * determines if it is visible vertically within the viewport.
   *
   * @param {HTMLElement} el - The element to check for visibility.
   * @returns {boolean} True if the element is in the viewport, false otherwise.
   */
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

  /**
   * Handles the window scroll event.
   *
   * This method checks the visibility of all registered elements whenever a scroll event occurs.
   * It updates the visibility state of each element based on whether it is currently within the viewport.
   */
  onWindowScroll(): void {
    Object.keys(this.elementStates).forEach(elementId => {
      const element = document.getElementById(elementId);
      if (element) {
        if (this.isElementInViewport(element)) {
          this.elementStates[elementId] = 'visible';
          //console.log('visible: ', elementId);
        } else {
          this.elementStates[elementId] = 'hidden';
          //console.log('hidden: ', elementId);
        }
      }
    });
  }

  /**
   * Registers an element by its ID and sets its initial visibility state to 'visible'.
   *
   * This method adds the element ID to the elementStates object and initializes its state.
   *
   * @param {string} elementId - The ID of the element to register.
   */
  registerElement(elementId: string): void {
    console.log('registered: ', elementId);
    this.elementStates[elementId] = 'visible';
  }

  /**
   * Retrieves the current visibility state of a registered element by its ID.
   *
   * This method returns the visibility state ('visible' or 'hidden') of the specified element.
   *
   * @param {string} elementId - The ID of the element whose state is being retrieved.
   * @returns {string} The current state of the element ('visible' or 'hidden').
   */
  getElementState(elementId: string): string {
    return this.elementStates[elementId];
  }

/**
 * Retrieves the available formats for a given book.
 * 
 * This method extracts the format information from a book object,
 * maps each format to an object containing the format's title and link,
 * and returns an array of these objects.
 * 
 * @param {any} book - The book object containing format information.
 * @returns {any[]} An array of objects, each representing a format with a title and link.
 */
  getBookFormats(book: any): any[] {
    const formats = book.formats || {};
    return Object.keys(formats).map(format => {
      const formatData = formats[format];
      return {
        label: formatData.title,
        link: formatData.link
      };
    });
  }

  /**
  * Scrolls to top of the page (based on contentContainer)
  */
  scrollToTop(): void {
    this.scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Scrolls to a specific section within the page.
   * @param {string} sectionId - The ID of the section to scroll to.
   */
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
   * Displays an overlay with detailed information about a selected book.
   *
   * This method sets the selected book, scrolls the main container to the top,
   * disables scrolling on the main container, and sets up scroll event handling
   * for the overlay element. It uses a timeout to ensure the overlay element is
   * available in the DOM before adding the event listener.
   *
   * @param {any} book - The book object containing details to be displayed in the overlay.
   */
  showOverlay(book: any): void {
    this.selectedBook = book;
    this.scrollContainer.scrollTo({ top: 0 });
    this.scrollContainer.classList.add('noScroll');
    this.scrollContainer.removeEventListener('scroll', this.onWindowScroll.bind(this));
    setTimeout(() => {
      this.scrollContainer = document.getElementById('overlay') as HTMLElement;
      this.scrollContainer.addEventListener('scroll', this.onWindowScroll.bind(this));
    }, 0);
  }

  /**
   * Closes the overlay and re-enables scrolling on the main container.
   *
   * This method clears the selected book, re-enables scrolling on the main container,
   * and restores the scroll event handling for the main container element.
   */
  closeOverlay(): void {
    this.selectedBook = null;
    this.scrollContainer.removeEventListener('scroll', this.onWindowScroll.bind(this));
    this.scrollContainer = document.getElementById('contentContainer') as HTMLElement;
    this.scrollContainer.classList.remove('noScroll');
    this.scrollContainer.addEventListener('scroll', this.onWindowScroll.bind(this));
  }
}
