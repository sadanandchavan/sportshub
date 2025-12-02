import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRewardsChartComponent } from './total-rewards-chart.component';

describe('TotalRewardsChartComponent', () => {
  let component: TotalRewardsChartComponent;
  let fixture: ComponentFixture<TotalRewardsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalRewardsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalRewardsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
