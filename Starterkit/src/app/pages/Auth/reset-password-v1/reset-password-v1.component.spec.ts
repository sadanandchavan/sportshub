import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordV1Component } from './reset-password-v1.component';

describe('ResetPasswordV1Component', () => {
  let component: ResetPasswordV1Component;
  let fixture: ComponentFixture<ResetPasswordV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPasswordV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
