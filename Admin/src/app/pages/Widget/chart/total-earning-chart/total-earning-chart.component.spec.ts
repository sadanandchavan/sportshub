import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalEarningChartComponent } from './total-earning-chart.component';

describe('TotalEarningChartComponent', () => {
  let component: TotalEarningChartComponent;
  let fixture: ComponentFixture<TotalEarningChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalEarningChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalEarningChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
