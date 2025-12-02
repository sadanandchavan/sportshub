import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcBreadcrumbComponent } from './bc-breadcrumb.component';

describe('BcBreadcrumbComponent', () => {
  let component: BcBreadcrumbComponent;
  let fixture: ComponentFixture<BcBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcBreadcrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
