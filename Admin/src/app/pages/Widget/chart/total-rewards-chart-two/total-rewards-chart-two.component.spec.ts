import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRewardsChartTwoComponent } from './total-rewards-chart-two.component';

describe('TotalRewardsChartTwoComponent', () => {
  let component: TotalRewardsChartTwoComponent;
  let fixture: ComponentFixture<TotalRewardsChartTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalRewardsChartTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalRewardsChartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
