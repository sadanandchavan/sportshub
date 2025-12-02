import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesspentChartComponent } from './timesspent-chart.component';

describe('TimesspentChartComponent', () => {
  let component: TimesspentChartComponent;
  let fixture: ComponentFixture<TimesspentChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimesspentChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesspentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
