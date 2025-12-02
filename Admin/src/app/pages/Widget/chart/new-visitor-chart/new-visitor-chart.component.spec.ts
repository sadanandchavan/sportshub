import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVisitorChartComponent } from './new-visitor-chart.component';

describe('NewVisitorChartComponent', () => {
  let component: NewVisitorChartComponent;
  let fixture: ComponentFixture<NewVisitorChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewVisitorChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewVisitorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
