import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
export interface User {
  name: string;
  imageUrl: string;
  role: string;
  earnings: number;
  changePercentage: number;
  isIncrease: boolean;
}

@Component({
  selector: 'app-affiliate',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: './affiliate.component.html',
  styleUrl: './affiliate.component.css'
})
export class AffiliateComponent {
  affiliates: User[] = [
    { name: 'John Doe', imageUrl: 'assets/images/user/avatar-2.jpg', role: 'Dashboard', earnings: 38, changePercentage: 5.8, isIncrease: true },
    { name: 'Keefs', imageUrl: 'assets/images/user/avatar-1.jpg', role: 'New Website', earnings: 928, changePercentage: 51.2, isIncrease: false },
    { name: 'Lazaro', imageUrl: 'assets/images/user/avatar-3.jpg', role: 'Dashboard', earnings: 674, changePercentage: 17.1, isIncrease: true },
    { name: 'Adeline', imageUrl: 'assets/images/user/avatar-4.jpg', role: 'New Website', earnings: 1438, changePercentage: 15.8, isIncrease: false },
    { name: 'John Doe', imageUrl: 'assets/images/user/avatar-5.jpg', role: 'Invoice', earnings: 90, changePercentage: 9.8, isIncrease: true },
    { name: 'Keefs', imageUrl: 'assets/images/user/avatar-6.jpg', role: 'Dashboard', earnings: 123, changePercentage: 5.8, isIncrease: true },
    { name: 'Lazaro', imageUrl: 'assets/images/user/avatar-7.jpg', role: 'Landing page', earnings: 928, changePercentage: 51.2, isIncrease: false }
  ];

  visitors: User[] = [
    { name: 'Adeline', imageUrl: 'assets/images/user/avatar-4.jpg', role: '', earnings: 1438, changePercentage: 15.8, isIncrease: false },
    { name: 'John Doe', imageUrl: 'assets/images/user/avatar-5.jpg', role: '', earnings: 90, changePercentage: 9.8, isIncrease: true },
    { name: 'Keefs', imageUrl: 'assets/images/user/avatar-6.jpg', role: '', earnings: 123, changePercentage: 5.8, isIncrease: true },
    { name: 'Lazaro', imageUrl: 'assets/images/user/avatar-7.jpg', role: '', earnings: 928, changePercentage: 51.2, isIncrease: false },
    { name: 'John Doe', imageUrl: 'assets/images/user/avatar-2.jpg', role: '', earnings: 38, changePercentage: 5.8, isIncrease: true },
    { name: 'Keefs', imageUrl: 'assets/images/user/avatar-1.jpg', role: '', earnings: 928, changePercentage: 51.2, isIncrease: false },
    { name: 'Lazaro', imageUrl: 'assets/images/user/avatar-3.jpg', role: '', earnings: 674, changePercentage: 17.1, isIncrease: true }
  ];
}
