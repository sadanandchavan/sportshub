import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChoicesComponent } from './form-choices.component';

describe('FormChoicesComponent', () => {
  let component: FormChoicesComponent;
  let fixture: ComponentFixture<FormChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormChoicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
