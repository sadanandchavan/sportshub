import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblDtSimpleComponent } from './tbl-dt-simple.component';

describe('TblDtSimpleComponent', () => {
  let component: TblDtSimpleComponent;
  let fixture: ComponentFixture<TblDtSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TblDtSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblDtSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
