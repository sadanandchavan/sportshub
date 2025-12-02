import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtExtScrollerComponent } from './dt-ext-scroller.component';

describe('DtExtScrollerComponent', () => {
  let component: DtExtScrollerComponent;
  let fixture: ComponentFixture<DtExtScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtExtScrollerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtExtScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
