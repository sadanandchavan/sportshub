import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtApiComponent } from './dt-api.component';

describe('DtApiComponent', () => {
  let component: DtApiComponent;
  let fixture: ComponentFixture<DtApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
