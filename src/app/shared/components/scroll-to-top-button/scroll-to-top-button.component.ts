import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-button',
  templateUrl: './scroll-to-top-button.component.html',
  styleUrls: ['./scroll-to-top-button.component.scss']
})
export class ScrollToTopButtonComponent implements AfterViewInit, OnDestroy {
  showScrollTopButton: boolean = false;
  scrollThreshold = window.innerHeight * 0.2;
  scrollContainer!: HTMLElement;

  constructor(private el: ElementRef) { }

  /**
   * Smoothly scrolls the container to the top.
   */
  scrollToTop(): void {
    this.scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
  * Lifecycle hook that is called after the component's view has been fully initialized.
  * Sets up the scroll container and attaches a scroll event listener.
  */
  ngAfterViewInit(): void {
    this.scrollContainer = document.getElementById('contentContainer') as HTMLElement;
    this.scrollContainer.addEventListener('scroll', this.onScroll.bind(this));
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   * Removes the scroll event listener from the scroll container.
   */
  ngOnDestroy(): void {
    this.scrollContainer.removeEventListener('scroll', this.onScroll.bind(this));
  }

  /**
  * Handles the scroll event to toggle the visibility of the scroll-to-top button
  * based on the scroll position.
  */
  onScroll(): void {
    const scrollPosition = this.scrollContainer.scrollTop;
    this.showScrollTopButton = scrollPosition > this.scrollThreshold;
  }
}

