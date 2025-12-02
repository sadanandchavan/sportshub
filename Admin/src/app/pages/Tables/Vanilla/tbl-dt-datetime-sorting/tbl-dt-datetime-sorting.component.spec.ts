import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblDtDatetimeSortingComponent } from './tbl-dt-datetime-sorting.component';

describe('TblDtDatetimeSortingComponent', () => {
  let component: TblDtDatetimeSortingComponent;
  let fixture: ComponentFixture<TblDtDatetimeSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TblDtDatetimeSortingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblDtDatetimeSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
