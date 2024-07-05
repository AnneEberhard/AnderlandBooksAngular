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

  constructor(private el: ElementRef) {}

  scrollToTop(): void {
    this.scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngAfterViewInit(): void {
    this.scrollContainer = document.getElementById('contentContainer') as HTMLElement;
    this.scrollContainer.addEventListener('scroll', this.onScroll.bind(this));
  }

  ngOnDestroy(): void {
    this.scrollContainer.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(): void {
    const scrollPosition = this.scrollContainer.scrollTop;
    this.showScrollTopButton = scrollPosition > this.scrollThreshold;
  }
}

