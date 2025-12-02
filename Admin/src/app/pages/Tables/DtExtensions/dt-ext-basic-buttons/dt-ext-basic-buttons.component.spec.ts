import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtExtBasicButtonsComponent } from './dt-ext-basic-buttons.component';

describe('DtExtBasicButtonsComponent', () => {
  let component: DtExtBasicButtonsComponent;
  let fixture: ComponentFixture<DtExtBasicButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtExtBasicButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtExtBasicButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
