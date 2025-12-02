import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtExtSelectComponent } from './dt-ext-select.component';

describe('DtExtSelectComponent', () => {
  let component: DtExtSelectComponent;
  let fixture: ComponentFixture<DtExtSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtExtSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtExtSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
