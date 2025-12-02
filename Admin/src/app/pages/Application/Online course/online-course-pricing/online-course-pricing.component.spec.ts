import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCoursePricingComponent } from './online-course-pricing.component';

describe('OnlineCoursePricingComponent', () => {
  let component: OnlineCoursePricingComponent;
  let fixture: ComponentFixture<OnlineCoursePricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineCoursePricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineCoursePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
