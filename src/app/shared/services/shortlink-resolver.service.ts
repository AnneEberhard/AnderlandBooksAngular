import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { ShortlinkService } from './shortlink.service';

/**
 * Resolver function that fetches the target URL based on a shortlink ID.
 * This function is executed before the route is activated.
 */
export const shortlinkResolver: ResolveFn<string | null> = (route: ActivatedRouteSnapshot) => {
  // Extract the shortlink ID from the route parameters
  const shortId = route.paramMap.get('shortId');
  const shortlinkService = inject(ShortlinkService);

  console.log('Shortlink Resolver triggered for:', shortId); // Debugging

  return shortlinkService.getShortlinks().pipe(
    map(shortlinks => {
      // Find the corresponding target URL for the given shortlink ID
      const target = shortId ? shortlinks[shortId] : null;
      console.log('Resolved target URL:', target); // Debugging
      return target; // Return the target URL instead of performing navigation
    })
  );
};
