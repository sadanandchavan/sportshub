import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlySummaryChartComponent } from './yearly-summary-chart.component';

describe('YearlySummaryChartComponent', () => {
  let component: YearlySummaryChartComponent;
  let fixture: ComponentFixture<YearlySummaryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearlySummaryChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearlySummaryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
