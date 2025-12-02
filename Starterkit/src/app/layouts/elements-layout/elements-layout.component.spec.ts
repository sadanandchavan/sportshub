import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsLayoutComponent } from './elements-layout.component';

describe('ElementsLayoutComponent', () => {
  let component: ElementsLayoutComponent;
  let fixture: ComponentFixture<ElementsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
