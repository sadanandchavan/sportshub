import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutVerticalTabComponent } from './layout-vertical-tab.component';

describe('LayoutVerticalTabComponent', () => {
  let component: LayoutVerticalTabComponent;
  let fixture: ComponentFixture<LayoutVerticalTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutVerticalTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutVerticalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
