import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcExtraComponent } from './bc-extra.component';

describe('BcExtraComponent', () => {
  let component: BcExtraComponent;
  let fixture: ComponentFixture<BcExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcExtraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
