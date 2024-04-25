import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Scraper } from 'src/interfaces/scraper';
import { ScraperService } from 'src/services/scraper.service';
import Swal from 'sweetalert2';

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
  async getScrapers(): Promise<void>{
    try{
      const scrapers = await this.scraperService.getScrapers().toPromise();
      this.dataSource = new MatTableDataSource<Scraper>(scrapers);
      console.log(scrapers);
      if (scrapers!.length !== 0){
       Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Scrapers loaded successfully",
          showConfirmButton: false,
          timer: 1500,
         width: 350,
         heightAuto: true,
         timerProgressBar: true,
         backdrop: false,
        });
      }
    }
    catch(err){
      console.error(err);
      Swal.fire('Error', 'An error has occurred', 'error');
    }


  }




}
