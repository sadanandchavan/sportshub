import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceledOrderChartComponent } from './canceled-order-chart.component';

describe('CanceledOrderChartComponent', () => {
  let component: CanceledOrderChartComponent;
  let fixture: ComponentFixture<CanceledOrderChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanceledOrderChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanceledOrderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
