import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPricingComponent } from './setting-pricing.component';

describe('SettingPricingComponent', () => {
  let component: SettingPricingComponent;
  let fixture: ComponentFixture<SettingPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingPricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
