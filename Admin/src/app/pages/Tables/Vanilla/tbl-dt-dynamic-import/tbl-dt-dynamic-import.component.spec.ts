import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblDtDynamicImportComponent } from './tbl-dt-dynamic-import.component';

describe('TblDtDynamicImportComponent', () => {
  let component: TblDtDynamicImportComponent;
  let fixture: ComponentFixture<TblDtDynamicImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TblDtDynamicImportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblDtDynamicImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
