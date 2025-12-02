import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTourComponent } from './ac-tour.component';

describe('AcTourComponent', () => {
  let component: AcTourComponent;
  let fixture: ComponentFixture<AcTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
