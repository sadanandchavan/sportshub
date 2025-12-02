import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceProductComponent } from './e-commerce-product.component';

describe('ECommerceProductComponent', () => {
  let component: ECommerceProductComponent;
  let fixture: ComponentFixture<ECommerceProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ECommerceProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommerceProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
