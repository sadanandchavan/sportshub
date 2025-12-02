import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeVerificationV1Component } from './code-verification-v1.component';

describe('CodeVerificationV1Component', () => {
  let component: CodeVerificationV1Component;
  let fixture: ComponentFixture<CodeVerificationV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeVerificationV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeVerificationV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
