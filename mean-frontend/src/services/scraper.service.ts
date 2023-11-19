import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  constructor(
    private http: HttpClient
  ) {}

  findAll(): Observable<Object> {
    return this.http.get<Object>('/ui/scraper/findAll');
  }

  execute(id: string): Observable<Object> {
    return this.http.get<Object>('/ui/scraper/execute/' + id);
  }

}
