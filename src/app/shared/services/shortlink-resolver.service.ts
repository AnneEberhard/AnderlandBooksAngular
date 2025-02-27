import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ShortlinkService } from './shortlink.service';
import { of } from 'rxjs';

export const shortlinkResolver: ResolveFn<string | null> = (route: ActivatedRouteSnapshot) => {
  const shortId = route.paramMap.get('shortId');
  const shortlinkService = inject(ShortlinkService);

  console.log('Shortlink Resolver aufgerufen für:', shortId); // Debugging

  return shortlinkService.getShortlinks().pipe(
    map(shortlinks => {
      const target = shortId ? shortlinks[shortId] : null;
      console.log('Gefundener Ziel-Link:', target); // Debugging
      return target; // Hier wird das Ziel zurückgegeben, anstatt die Navigation durchzuführen
    })
  );
};
