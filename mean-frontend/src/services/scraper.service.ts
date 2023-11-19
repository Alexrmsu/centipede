import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  constructor(
    private http : HttpClient,

  ) {}
  url : string = 'localhost:3000/api/'

  findAll(): Observable<Object> {
    return this.http.get<Object>(this.url +'scraper/findAll');
  }

  execute(id: string): Observable<Object> {
    return this.http.get<Object>(this.url + 'scraper/execute/' + id);
  }

  createScraper(path: string, source: string, tech: string): Observable<Object> {
    return this.http.post<Object>(this.url + 'scraper/create', {path, source, tech});
  }



}
