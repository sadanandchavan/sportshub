import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcTooltipPopoverComponent } from './bc-tooltip-popover.component';

describe('BcTooltipPopoverComponent', () => {
  let component: BcTooltipPopoverComponent;
  let fixture: ComponentFixture<BcTooltipPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcTooltipPopoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcTooltipPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
