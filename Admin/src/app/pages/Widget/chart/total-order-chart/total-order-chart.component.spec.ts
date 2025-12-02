import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalOrderChartComponent } from './total-order-chart.component';

describe('TotalOrderChartComponent', () => {
  let component: TotalOrderChartComponent;
  let fixture: ComponentFixture<TotalOrderChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalOrderChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalOrderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
