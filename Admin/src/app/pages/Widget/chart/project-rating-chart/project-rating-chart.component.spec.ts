import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRatingChartComponent } from './project-rating-chart.component';

describe('ProjectRatingChartComponent', () => {
  let component: ProjectRatingChartComponent;
  let fixture: ComponentFixture<ProjectRatingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectRatingChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRatingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
