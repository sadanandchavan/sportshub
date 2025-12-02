import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtExtAutofillComponent } from './dt-ext-autofill.component';

describe('DtExtAutofillComponent', () => {
  let component: DtExtAutofillComponent;
  let fixture: ComponentFixture<DtExtAutofillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtExtAutofillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtExtAutofillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
