import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTwoCreateComponent } from './invoice-two-create.component';

describe('InvoiceTwoCreateComponent', () => {
  let component: InvoiceTwoCreateComponent;
  let fixture: ComponentFixture<InvoiceTwoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceTwoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceTwoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
