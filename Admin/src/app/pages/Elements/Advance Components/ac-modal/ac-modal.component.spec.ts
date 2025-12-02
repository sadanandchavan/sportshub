import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcModalComponent } from './ac-modal.component';

describe('AcModalComponent', () => {
  let component: AcModalComponent;
  let fixture: ComponentFixture<AcModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
