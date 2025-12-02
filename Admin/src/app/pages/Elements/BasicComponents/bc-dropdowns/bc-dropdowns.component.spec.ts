import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcDropdownsComponent } from './bc-dropdowns.component';

describe('BcDropdownsComponent', () => {
  let component: BcDropdownsComponent;
  let fixture: ComponentFixture<BcDropdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcDropdownsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
