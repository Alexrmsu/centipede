import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScraperDetailsComponent } from './scraper-details.component';

describe('ScraperDetailsComponent', () => {
  let component: ScraperDetailsComponent;
  let fixture: ComponentFixture<ScraperDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScraperDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScraperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
