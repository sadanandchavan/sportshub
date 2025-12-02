import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcNotificationComponent } from './ac-notification.component';

describe('AcNotificationComponent', () => {
  let component: AcNotificationComponent;
  let fixture: ComponentFixture<AcNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
