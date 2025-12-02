import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblDtFetchApiComponent } from './tbl-dt-fetch-api.component';

describe('TblDtFetchApiComponent', () => {
  let component: TblDtFetchApiComponent;
  let fixture: ComponentFixture<TblDtFetchApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TblDtFetchApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblDtFetchApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
