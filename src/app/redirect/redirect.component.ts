import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  template: `<p>Redirecting...</p>`
})
export class RedirectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("RedirectComponent geladen");

    this.route.data.subscribe(data => {
      const target = data['redirect']; // Hier wird das Ergebnis des Resolvers abgerufen
      console.log('Redirecting to:', target); // Debugging

      if (target) {
        setTimeout(() => {
          window.location.href = target;
        }, 0);
      } else {
        this.router.navigate(['/not-found']);
      }
    });
  }
}
