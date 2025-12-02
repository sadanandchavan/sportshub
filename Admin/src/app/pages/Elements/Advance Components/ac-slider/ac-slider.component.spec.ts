import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcSliderComponent } from './ac-slider.component';

describe('AcSliderComponent', () => {
  let component: AcSliderComponent;
  let fixture: ComponentFixture<AcSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
