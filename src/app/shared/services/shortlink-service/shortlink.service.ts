import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root' // The service is provided globally in the application
})
export class ShortlinkService {
  // Path to the JSON file containing the shortlinks
  private shortlinksUrl = 'assets/jsons/shortlinks.json';

  constructor(private http: HttpClient) {}

  /**
   * Fetches the shortlink data from the JSON file.
   * 
   * @returns Observable containing a mapping of shortlink IDs to target URLs.
   */
  getShortlinks(): Observable<Record<string, string>> {
    return this.http.get<Record<string, string>>(this.shortlinksUrl).pipe(
      tap((shortlinks: any) => console.log('📄 Geladene Shortlinks:', shortlinks)) // <-- Debugging
    );
  }
}
