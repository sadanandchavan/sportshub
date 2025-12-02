import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtExtFixedColumnsComponent } from './dt-ext-fixed-columns.component';

describe('DtExtFixedColumnsComponent', () => {
  let component: DtExtFixedColumnsComponent;
  let fixture: ComponentFixture<DtExtFixedColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtExtFixedColumnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtExtFixedColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
