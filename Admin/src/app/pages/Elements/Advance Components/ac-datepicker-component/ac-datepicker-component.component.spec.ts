import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcDatepickerComponentComponent } from './ac-datepicker-component.component';

describe('AcDatepickerComponentComponent', () => {
  let component: AcDatepickerComponentComponent;
  let fixture: ComponentFixture<AcDatepickerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcDatepickerComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcDatepickerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
