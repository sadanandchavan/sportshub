import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcCardComponent } from './bc-card.component';

describe('BcCardComponent', () => {
  let component: BcCardComponent;
  let fixture: ComponentFixture<BcCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
