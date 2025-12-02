import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblDtColumnManipulationComponent } from './tbl-dt-column-manipulation.component';

describe('TblDtColumnManipulationComponent', () => {
  let component: TblDtColumnManipulationComponent;
  let fixture: ComponentFixture<TblDtColumnManipulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TblDtColumnManipulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblDtColumnManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
