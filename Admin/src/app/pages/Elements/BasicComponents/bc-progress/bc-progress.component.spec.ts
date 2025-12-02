import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcProgressComponent } from './bc-progress.component';

describe('BcProgressComponent', () => {
  let component: BcProgressComponent;
  let fixture: ComponentFixture<BcProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
