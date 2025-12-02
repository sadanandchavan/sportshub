import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApplyComponent } from './student-apply.component';

describe('StudentApplyComponent', () => {
  let component: StudentApplyComponent;
  let fixture: ComponentFixture<StudentApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentApplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
