import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtExtFixedHeaderComponent } from './dt-ext-fixed-header.component';

describe('DtExtFixedHeaderComponent', () => {
  let component: DtExtFixedHeaderComponent;
  let fixture: ComponentFixture<DtExtFixedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtExtFixedHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtExtFixedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
