import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtExtResponsiveComponent } from './dt-ext-responsive.component';

describe('DtExtResponsiveComponent', () => {
  let component: DtExtResponsiveComponent;
  let fixture: ComponentFixture<DtExtResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtExtResponsiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtExtResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
