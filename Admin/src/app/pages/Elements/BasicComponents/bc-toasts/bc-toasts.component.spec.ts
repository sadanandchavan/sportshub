import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcToastsComponent } from './bc-toasts.component';

describe('BcToastsComponent', () => {
  let component: BcToastsComponent;
  let fixture: ComponentFixture<BcToastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcToastsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
