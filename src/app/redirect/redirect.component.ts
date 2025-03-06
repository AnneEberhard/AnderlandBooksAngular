import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShortlinkService } from '../shared/services/shortlink.service';

@Component({
  selector: 'app-redirect',
  template: `<p>Redirecting...</p>`
})
export class RedirectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shortlinkService: ShortlinkService
  ) {}

  ngOnInit() {
    console.log("RedirectComponent geladen");

     // Holen des Hash-Werts nach dem `#`
     let shortId = window.location.hash.substring(1).toLowerCase();
     console.log('Shortlink erkannt:', shortId);

    // Shortlink-Liste laden
    this.shortlinkService.getShortlinks().subscribe(shortlinks => {
      const normalizedShortlinks = Object.keys(shortlinks).reduce((acc, key) => {
        acc[key.toLowerCase()] = shortlinks[key]; // Alles klein machen
        return acc;
      }, {} as Record<string, string>);

      console.log('Normalized Shortlinks:', normalizedShortlinks);
      const target = normalizedShortlinks[shortId];

      if (target) {
        console.log('Redirecting to:', target);
        setTimeout(() => {
          window.location.href = target; // Direkte Weiterleitung
        }, 0);
      } else {
        console.warn('Kein Ziel gefunden für:', shortId);
        window.location.href = '/not-found';
      }
    });
  }
}
