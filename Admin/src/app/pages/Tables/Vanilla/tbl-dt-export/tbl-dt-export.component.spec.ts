import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblDtExportComponent } from './tbl-dt-export.component';

describe('TblDtExportComponent', () => {
  let component: TblDtExportComponent;
  let fixture: ComponentFixture<TblDtExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TblDtExportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblDtExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
