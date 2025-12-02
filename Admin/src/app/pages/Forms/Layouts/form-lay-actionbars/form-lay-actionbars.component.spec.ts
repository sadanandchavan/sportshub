import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayActionbarsComponent } from './form-lay-actionbars.component';

describe('FormLayActionbarsComponent', () => {
  let component: FormLayActionbarsComponent;
  let fixture: ComponentFixture<FormLayActionbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLayActionbarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLayActionbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
