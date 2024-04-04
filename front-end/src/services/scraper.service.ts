import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../environments/environment.development";
import {Scraper} from "../interfaces/scraper";

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  constructor(
    private http : HttpClient,
  ) {}
  url : string = API_URL  + 'scraper/';





}
