import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../../../../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-setting-notifiction',
  standalone: true,
  imports: [FormsModule,CommonModule,BreadcrumbComponent],
  templateUrl: './setting-notifiction.component.html',
  styleUrl: './setting-notifiction.component.css'
})
export class SettingNotifictionComponent {
  enrollmentNotifications = [
    { id: 'notifyswitch-1', label: 'When a new student joins the school', checked: true },
    { id: 'notifyswitch-2', label: 'When a student enrolls in a paid course', checked: true },
    { id: 'notifyswitch-3', label: 'When a student enrolls in a free course', checked: false }
  ];

  commentNotifications = [
    { id: 'notifyswitch-4', label: 'When a new comment is posted that requires moderation', checked: true },
    { id: 'notifyswitch-5', label: 'When a new comment is posted on one of your courses', checked: false },
    { id: 'notifyswitch-6', label: 'When a new comment is posted in a thread you\'ve commented on', checked: true }
  ];

  subscriptionNotifications = [
    { id: 'notifyswitch-7', label: 'When a subscription payment fails or a subscription is canceled due to non-payment', checked: true },
    { id: 'notifyswitch-8', label: 'When a student cancels their subscription to one of your courses', checked: true }
  ];
}
