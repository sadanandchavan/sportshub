import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayDefaultComponent } from './form-lay-default.component';

describe('FormLayDefaultComponent', () => {
  let component: FormLayDefaultComponent;
  let fixture: ComponentFixture<FormLayDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLayDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLayDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
