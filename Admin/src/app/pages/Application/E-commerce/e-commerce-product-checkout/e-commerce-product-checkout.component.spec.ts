import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceProductCheckoutComponent } from './e-commerce-product-checkout.component';

describe('ECommerceProductCheckoutComponent', () => {
  let component: ECommerceProductCheckoutComponent;
  let fixture: ComponentFixture<ECommerceProductCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ECommerceProductCheckoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommerceProductCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
