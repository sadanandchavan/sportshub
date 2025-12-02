import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcLightboxComponent } from './ac-lightbox.component';

describe('AcLightboxComponent', () => {
  let component: AcLightboxComponent;
  let fixture: ComponentFixture<AcLightboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcLightboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
