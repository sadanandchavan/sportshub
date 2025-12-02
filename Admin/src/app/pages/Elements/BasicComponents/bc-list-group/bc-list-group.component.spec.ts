import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcListGroupComponent } from './bc-list-group.component';

describe('BcListGroupComponent', () => {
  let component: BcListGroupComponent;
  let fixture: ComponentFixture<BcListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcListGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
