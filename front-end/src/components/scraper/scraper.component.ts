import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Scraper } from 'src/interfaces/scraper';
import { ScraperService } from 'src/services/scraper.service';

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.css']
})
export class ScraperComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['id', 'path', 'source', 'tech', 'dateUpdated', 'dateCreated'];
  dataSource = new MatTableDataSource<Scraper>;
  actualScraper : FormGroup | undefined;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
     private scraperService: ScraperService,
  ) {}

  ngOnInit() : void  {
    this.getScrapers();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  getScrapers(): void {
    this.scraperService.getScrapers().subscribe((res): void => {
      this.dataSource = new MatTableDataSource<Scraper>(res);
      console.log(res)
    });

  }




}
