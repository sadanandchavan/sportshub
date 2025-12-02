import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtStylingComponent } from './dt-styling.component';

describe('DtStylingComponent', () => {
  let component: DtStylingComponent;
  let fixture: ComponentFixture<DtStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtStylingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
