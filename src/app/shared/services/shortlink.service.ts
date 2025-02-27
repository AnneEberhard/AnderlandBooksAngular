import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortlinkService {
  private shortlinksUrl = 'assets/jsons/shortlinks.json';

  constructor(private http: HttpClient) {}

  getShortlinks(): Observable<Record<string, string>> {
    return this.http.get<Record<string, string>>(this.shortlinksUrl);
  }
}
