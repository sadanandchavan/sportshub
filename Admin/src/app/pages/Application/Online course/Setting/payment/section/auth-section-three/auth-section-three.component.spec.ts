import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSectionThreeComponent } from './auth-section-three.component';

describe('AuthSectionThreeComponent', () => {
  let component: AuthSectionThreeComponent;
  let fixture: ComponentFixture<AuthSectionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSectionThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
