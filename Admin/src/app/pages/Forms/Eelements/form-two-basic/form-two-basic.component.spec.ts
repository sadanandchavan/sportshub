import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwoBasicComponent } from './form-two-basic.component';

describe('FormTwoBasicComponent', () => {
  let component: FormTwoBasicComponent;
  let fixture: ComponentFixture<FormTwoBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTwoBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTwoBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
