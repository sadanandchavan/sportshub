import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyReportGraphComponent } from './monthly-report-graph.component';

describe('MonthlyReportGraphComponent', () => {
  let component: MonthlyReportGraphComponent;
  let fixture: ComponentFixture<MonthlyReportGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyReportGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyReportGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
