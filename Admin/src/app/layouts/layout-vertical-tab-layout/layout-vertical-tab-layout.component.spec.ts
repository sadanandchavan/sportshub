import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutVerticalTabLayoutComponent } from './layout-vertical-tab-layout.component';

describe('LayoutVerticalTabLayoutComponent', () => {
  let component: LayoutVerticalTabLayoutComponent;
  let fixture: ComponentFixture<LayoutVerticalTabLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutVerticalTabLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutVerticalTabLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
