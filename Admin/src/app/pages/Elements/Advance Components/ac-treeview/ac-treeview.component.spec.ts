import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTreeviewComponent } from './ac-treeview.component';

describe('AcTreeviewComponent', () => {
  let component: AcTreeviewComponent;
  let fixture: ComponentFixture<AcTreeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcTreeviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
