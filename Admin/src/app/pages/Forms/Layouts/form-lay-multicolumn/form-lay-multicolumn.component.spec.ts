import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayMulticolumnComponent } from './form-lay-multicolumn.component';

describe('FormLayMulticolumnComponent', () => {
  let component: FormLayMulticolumnComponent;
  let fixture: ComponentFixture<FormLayMulticolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLayMulticolumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLayMulticolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
