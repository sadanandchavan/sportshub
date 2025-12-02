import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule,FormsModule,BreadcrumbComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  user = {
    name: 'Airi Satou',
    location: 'Maiduguri, Borno State',
    email: 'emailis@private.com'
  };

  passwordForm = {
    newPassword: '',
    currentPassword: ''
  };

  membershipPlan = {
    title: 'Addicted',
    price: 150
  };

  renewalDate = '120 November, 2024';

  constructor() { }

  ngOnInit(): void { }

}
