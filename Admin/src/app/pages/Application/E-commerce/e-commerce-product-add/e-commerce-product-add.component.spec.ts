import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceProductAddComponent } from './e-commerce-product-add.component';

describe('ECommerceProductAddComponent', () => {
  let component: ECommerceProductAddComponent;
  let fixture: ComponentFixture<ECommerceProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ECommerceProductAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommerceProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
