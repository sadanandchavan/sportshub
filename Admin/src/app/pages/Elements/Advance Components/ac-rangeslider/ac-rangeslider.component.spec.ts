import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRangesliderComponent } from './ac-rangeslider.component';

describe('AcRangesliderComponent', () => {
  let component: AcRangesliderComponent;
  let fixture: ComponentFixture<AcRangesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcRangesliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcRangesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
