import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherApplyComponent } from './teacher-apply.component';

describe('TeacherApplyComponent', () => {
  let component: TeacherApplyComponent;
  let fixture: ComponentFixture<TeacherApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherApplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
