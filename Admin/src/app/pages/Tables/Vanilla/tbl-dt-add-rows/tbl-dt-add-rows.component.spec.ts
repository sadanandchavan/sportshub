import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblDtAddRowsComponent } from './tbl-dt-add-rows.component';

describe('TblDtAddRowsComponent', () => {
  let component: TblDtAddRowsComponent;
  let fixture: ComponentFixture<TblDtAddRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TblDtAddRowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblDtAddRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
