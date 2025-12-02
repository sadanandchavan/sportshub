import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTwoViewComponent } from './invoice-two-view.component';

describe('InvoiceTwoViewComponent', () => {
  let component: InvoiceTwoViewComponent;
  let fixture: ComponentFixture<InvoiceTwoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceTwoViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceTwoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
