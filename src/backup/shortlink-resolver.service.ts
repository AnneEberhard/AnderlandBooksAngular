import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ShortlinkService } from './shortlink.service';

/**
 * Resolver function that fetches the target URL based on a shortlink ID.
 * This function is executed before the route is activated.
 */
export const shortlinkResolver: ResolveFn<string | null> = (route: ActivatedRouteSnapshot) => {
  // Extract the shortlink ID from the route parameters
  const shortId = route.paramMap.get('shortId')?.toLowerCase();
  const shortlinkService = inject(ShortlinkService);

  console.log('Shortlink Resolver triggered for:', shortId); // Debugging

  return shortlinkService.getShortlinks().pipe(
    distinctUntilChanged(),
    map(shortlinks => {
      const normalizedShortlinks = Object.keys(shortlinks).reduce((acc, key) => {
        acc[key.toLowerCase()] = shortlinks[key]; // Alle Keys in Kleinbuchstaben speichern
        return acc;
      }, {} as Record<string, string>);

      console.log('Normalized Shortlinks:', normalizedShortlinks); // Debugging
      const target = shortId ? normalizedShortlinks[shortId] : null;
      console.log('Resolved target URL:', target); // Debugging

      return target;
    })
  );
};
