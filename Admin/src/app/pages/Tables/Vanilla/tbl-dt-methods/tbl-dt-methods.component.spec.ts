import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblDtMethodsComponent } from './tbl-dt-methods.component';

describe('TblDtMethodsComponent', () => {
  let component: TblDtMethodsComponent;
  let fixture: ComponentFixture<TblDtMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TblDtMethodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblDtMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
