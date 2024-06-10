import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import {API_URL} from "../environments/environment.development";
import {Scraper} from "../interfaces/scraper";

@Injectable({
  providedIn: 'root'
})
export class ScraperService {
  url : string = API_URL;

  constructor(
    private http : HttpClient,
  ) {}

   getScrapers(): Observable<Scraper[]> {
    return this.http.get<{ data: Scraper[] }>(this.url + '/getScrapers').pipe(
      map(response  => response.data)
    );
  }
  createScraper(scraper : Scraper ) : Observable<Scraper[]> {
    return this.http.post<Scraper[]>(this.url + '/create', scraper);
  }



}
