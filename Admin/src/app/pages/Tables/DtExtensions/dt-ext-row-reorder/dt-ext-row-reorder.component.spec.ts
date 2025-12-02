import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtExtRowReorderComponent } from './dt-ext-row-reorder.component';

describe('DtExtRowReorderComponent', () => {
  let component: DtExtRowReorderComponent;
  let fixture: ComponentFixture<DtExtRowReorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtExtRowReorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtExtRowReorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
