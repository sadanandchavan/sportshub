import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtExtColReorderComponent } from './dt-ext-col-reorder.component';

describe('DtExtColReorderComponent', () => {
  let component: DtExtColReorderComponent;
  let fixture: ComponentFixture<DtExtColReorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtExtColReorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtExtColReorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
