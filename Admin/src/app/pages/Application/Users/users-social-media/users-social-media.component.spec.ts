import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSocialMediaComponent } from './users-social-media.component';

describe('UsersSocialMediaComponent', () => {
  let component: UsersSocialMediaComponent;
  let fixture: ComponentFixture<UsersSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersSocialMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
