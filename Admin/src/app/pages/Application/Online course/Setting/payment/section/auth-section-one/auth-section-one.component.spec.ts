import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSectionOneComponent } from './auth-section-one.component';

describe('AuthSectionOneComponent', () => {
  let component: AuthSectionOneComponent;
  let fixture: ComponentFixture<AuthSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSectionOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
