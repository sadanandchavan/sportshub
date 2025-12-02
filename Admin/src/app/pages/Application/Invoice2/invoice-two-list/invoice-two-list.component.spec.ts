import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTwoListComponent } from './invoice-two-list.component';

describe('InvoiceTwoListComponent', () => {
  let component: InvoiceTwoListComponent;
  let fixture: ComponentFixture<InvoiceTwoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceTwoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceTwoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
