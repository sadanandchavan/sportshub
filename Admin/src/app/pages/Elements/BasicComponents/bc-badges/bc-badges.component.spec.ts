import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcBadgesComponent } from './bc-badges.component';

describe('BcBadgesComponent', () => {
  let component: BcBadgesComponent;
  let fixture: ComponentFixture<BcBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcBadgesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
