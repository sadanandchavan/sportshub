import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordV1Component } from './forgot-password-v1.component';

describe('ForgotPasswordV1Component', () => {
  let component: ForgotPasswordV1Component;
  let fixture: ComponentFixture<ForgotPasswordV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
