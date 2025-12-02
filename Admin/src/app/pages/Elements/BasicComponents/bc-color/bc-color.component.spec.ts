import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcColorComponent } from './bc-color.component';

describe('BcColorComponent', () => {
  let component: BcColorComponent;
  let fixture: ComponentFixture<BcColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
