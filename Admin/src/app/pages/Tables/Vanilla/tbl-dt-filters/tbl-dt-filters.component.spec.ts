import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblDtFiltersComponent } from './tbl-dt-filters.component';

describe('TblDtFiltersComponent', () => {
  let component: TblDtFiltersComponent;
  let fixture: ComponentFixture<TblDtFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TblDtFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblDtFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
