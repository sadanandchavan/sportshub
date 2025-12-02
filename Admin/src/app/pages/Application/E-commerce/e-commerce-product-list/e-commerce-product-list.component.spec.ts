import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceProductListComponent } from './e-commerce-product-list.component';

describe('ECommerceProductListComponent', () => {
  let component: ECommerceProductListComponent;
  let fixture: ComponentFixture<ECommerceProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ECommerceProductListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommerceProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
