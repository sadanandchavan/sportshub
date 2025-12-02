import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtExtExportButtonsComponent } from './dt-ext-export-buttons.component';

describe('DtExtExportButtonsComponent', () => {
  let component: DtExtExportButtonsComponent;
  let fixture: ComponentFixture<DtExtExportButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtExtExportButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtExtExportButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
