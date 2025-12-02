import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcCarouselComponent } from './bc-carousel.component';

describe('BcCarouselComponent', () => {
  let component: BcCarouselComponent;
  let fixture: ComponentFixture<BcCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
