import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordV2Component } from './reset-password-v2.component';

describe('ResetPasswordV2Component', () => {
  let component: ResetPasswordV2Component;
  let fixture: ComponentFixture<ResetPasswordV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPasswordV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
