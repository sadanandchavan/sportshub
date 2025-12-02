import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTwoEditComponent } from './invoice-two-edit.component';

describe('InvoiceTwoEditComponent', () => {
  let component: InvoiceTwoEditComponent;
  let fixture: ComponentFixture<InvoiceTwoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceTwoEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceTwoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
