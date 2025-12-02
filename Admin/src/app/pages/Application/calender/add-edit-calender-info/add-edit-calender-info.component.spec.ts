import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCalenderInfoComponent } from './add-edit-calender-info.component';

describe('AddEditCalenderInfoComponent', () => {
  let component: AddEditCalenderInfoComponent;
  let fixture: ComponentFixture<AddEditCalenderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditCalenderInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCalenderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
