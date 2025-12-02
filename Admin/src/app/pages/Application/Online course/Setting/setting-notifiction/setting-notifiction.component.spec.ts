import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingNotifictionComponent } from './setting-notifiction.component';

describe('SettingNotifictionComponent', () => {
  let component: SettingNotifictionComponent;
  let fixture: ComponentFixture<SettingNotifictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingNotifictionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingNotifictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
