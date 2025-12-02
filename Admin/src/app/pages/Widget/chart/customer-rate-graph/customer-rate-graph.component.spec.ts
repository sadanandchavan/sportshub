import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRateGraphComponent } from './customer-rate-graph.component';

describe('CustomerRateGraphComponent', () => {
  let component: CustomerRateGraphComponent;
  let fixture: ComponentFixture<CustomerRateGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRateGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRateGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
