import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtAdvanceComponent } from './dt-advance.component';

describe('DtAdvanceComponent', () => {
  let component: DtAdvanceComponent;
  let fixture: ComponentFixture<DtAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtAdvanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
