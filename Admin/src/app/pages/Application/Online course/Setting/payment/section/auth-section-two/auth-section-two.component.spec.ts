import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSectionTwoComponent } from './auth-section-two.component';

describe('AuthSectionTwoComponent', () => {
  let component: AuthSectionTwoComponent;
  let fixture: ComponentFixture<AuthSectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSectionTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
