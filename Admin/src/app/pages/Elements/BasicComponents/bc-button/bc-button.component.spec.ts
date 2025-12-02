import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcButtonComponent } from './bc-button.component';

describe('BcButtonComponent', () => {
  let component: BcButtonComponent;
  let fixture: ComponentFixture<BcButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
