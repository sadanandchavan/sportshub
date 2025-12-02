import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputmaskComponent } from './form-inputmask.component';

describe('FormInputmaskComponent', () => {
  let component: FormInputmaskComponent;
  let fixture: ComponentFixture<FormInputmaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInputmaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInputmaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
