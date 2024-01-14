import { Component } from '@angular/core';
import { ScraperService } from 'src/services/scraper.service';

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.css']
})
export class ScraperComponent {

  constructor(
     private scraperService: ScraperService
  ) {


  }

  getScrapers() {
    this.scraperService.findAll().subscribe(
      res => {
        console.log(res);
      })
  }

}
