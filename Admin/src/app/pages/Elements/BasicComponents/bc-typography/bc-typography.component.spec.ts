import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcTypographyComponent } from './bc-typography.component';

describe('BcTypographyComponent', () => {
  let component: BcTypographyComponent;
  let fixture: ComponentFixture<BcTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcTypographyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
