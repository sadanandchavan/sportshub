import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcSpinnerComponent } from './bc-spinner.component';

describe('BcSpinnerComponent', () => {
  let component: BcSpinnerComponent;
  let fixture: ComponentFixture<BcSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcSpinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
