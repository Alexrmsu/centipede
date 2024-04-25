import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Scraper} from 'src/interfaces/scraper';
import {ScraperService} from 'src/services/scraper.service';
import Swal from 'sweetalert2';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.css'],
  animations: [trigger('detailExpand', [state('collapsed', style({
    height: '0px',
    minHeight: '0',
    display: 'none'
  })), state('expanded', style({height: '*'})), transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),]),],
})
export class ScraperComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'path', 'source', 'tech', 'created_at', 'updated_at'];
  displayedColumnsExpand = ['id', 'path', 'source', 'tech', 'created_at', 'updated_at'];
  dataSource = new MatTableDataSource<Scraper>;
  expandedElement: Scraper | null | undefined;
  actualScraper: FormGroup | undefined;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private scraperService: ScraperService,) {
  }

  toggleExpansion(row: any): void {
    this.expandedElement = this.expandedElement === row ? null : row;
  }

  ngOnInit(): void {
    this.getScrapers();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  async getScrapers(): Promise<void> {
    try {
      const scrapers = await this.scraperService.getScrapers().toPromise();
      this.dataSource = new MatTableDataSource<Scraper>(scrapers);
      console.log(scrapers);
      if (scrapers!.length !== 0) {
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
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'An error has occurred', 'error');
    }


  }


}
