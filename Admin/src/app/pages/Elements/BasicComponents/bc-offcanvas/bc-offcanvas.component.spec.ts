import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcOffcanvasComponent } from './bc-offcanvas.component';

describe('BcOffcanvasComponent', () => {
  let component: BcOffcanvasComponent;
  let fixture: ComponentFixture<BcOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcOffcanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
