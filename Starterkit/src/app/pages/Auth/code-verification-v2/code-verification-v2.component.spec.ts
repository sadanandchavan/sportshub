import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeVerificationV2Component } from './code-verification-v2.component';

describe('CodeVerificationV2Component', () => {
  let component: CodeVerificationV2Component;
  let fixture: ComponentFixture<CodeVerificationV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeVerificationV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeVerificationV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
