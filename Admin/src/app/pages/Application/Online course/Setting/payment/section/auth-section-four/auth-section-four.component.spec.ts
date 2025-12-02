import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSectionFourComponent } from './auth-section-four.component';

describe('AuthSectionFourComponent', () => {
  let component: AuthSectionFourComponent;
  let fixture: ComponentFixture<AuthSectionFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSectionFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSectionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
