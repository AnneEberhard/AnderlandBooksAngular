import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-button',
  templateUrl: './scroll-to-top-button.component.html',
  styleUrls: ['./scroll-to-top-button.component.scss']
})

export class ScrollToTopButtonComponent {
  showScrollTopButton: boolean = false;

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = document.documentElement.scrollTop;
    const scrollThreshold = window.innerHeight * 0.2;
    this.showScrollTopButton = scrollPosition > scrollThreshold;
  }
}



