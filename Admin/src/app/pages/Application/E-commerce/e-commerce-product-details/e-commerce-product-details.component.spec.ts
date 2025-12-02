import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceProductDetailsComponent } from './e-commerce-product-details.component';

describe('ECommerceProductDetailsComponent', () => {
  let component: ECommerceProductDetailsComponent;
  let fixture: ComponentFixture<ECommerceProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ECommerceProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommerceProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
