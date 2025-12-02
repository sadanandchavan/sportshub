import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcAlertComponent } from './bc-alert.component';

describe('BcAlertComponent', () => {
  let component: BcAlertComponent;
  let fixture: ComponentFixture<BcAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
