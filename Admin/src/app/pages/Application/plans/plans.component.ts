import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, FormsModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {

  // Define the pricing plans for monthly and yearly
  pricingPlans = {
    monthly: [
      {
        id: 'lite-monthly', name: 'Lite', price: 0, icon: 'ph-rocket', bgColor: 'bg-light-primary', buttonText: 'Current Plan', buttonClass: 'btn-primary', item: [
          { text: 'Free domains', enable: true },
          { text: 'CDN Integration', enable: true },
          { text: 'Advanced Settings', enable: true },
          { text: '100,000 unique users', enable: false },
          { text: '2000 Items', enable: false },
          { text: 'API Access', enable: false },
          { text: 'Search Features', enable: false },
          { text: 'Editor personalization', enable: false },
          { text: 'Upload special sites', enable: false },
          { text: 'Advanced Features', enable: false },
        ]
      },
      {
        id: 'standard-monthly', name: 'Standard', price: 9, icon: 'ph-grains', bgColor: 'bg-light-secondary', buttonText: 'Upgrade Plan', buttonClass: 'btn-outline-secondary', item: [
          { text: 'Free domains', enable: true },
          { text: 'CDN Integration', enable: true },
          { text: 'Advanced Settings', enable: true },
          { text: '100,000 unique users', enable: true },
          { text: '2000 Items', enable: true },
          { text: 'API Access', enable: false },
          { text: 'Search Features', enable: false },
          { text: 'Editor personalization', enable: false },
          { text: 'Upload special sites', enable: false },
          { text: 'Advanced Features', enable: false },
        ]
      },
      {
        id: 'pro-monthly', name: 'Pro', price: 36, icon: 'ph-flower-lotus', bgColor: 'bg-light-secondary', buttonText: 'Upgrade Plan', buttonClass: 'btn-outline-secondary', item: [
          { text: 'Free domains', enable: true },
          { text: 'CDN Integration', enable: true },
          { text: 'Advanced Settings', enable: true },
          { text: '100,000 unique users', enable: true },
          { text: '2000 Items', enable: true },
          { text: 'API Access', enable: true },
          { text: 'Search Features', enable: true },
          { text: 'Editor personalization', enable: false },
          { text: 'Upload special sites', enable: false },
          { text: 'Advanced Features', enable: false },
        ]
      },
      {
        id: 'enterprise-monthly', name: 'ENTERPRISE', price: 69, icon: 'ph-buildings', bgColor: 'bg-light-secondary', buttonText: 'Upgrade Plan', buttonClass: 'btn-outline-secondary',
        item: [
          { text: 'Free domains', enable: true },
          { text: 'CDN Integration', enable: true },
          { text: 'Advanced Settings', enable: true },
          { text: '100,000 unique users', enable: true },
          { text: '2000 Items', enable: true },
          { text: 'API Access', enable: true },
          { text: 'Search Features', enable: true },
          { text: 'Editor personalization', enable: true },
          { text: 'Upload special sites', enable: true },
          { text: 'Advanced Features', enable: true },
        ]
      }
    ],
    yearly: [
      {
        id: 'lite-yearly', name: 'Lite', price: 120, icon: 'ph-rocket', bgColor: 'bg-light-primary', buttonText: 'Current Plan', buttonClass: 'btn-primary', item: [
          { text: 'Free domains', enable: true },
          { text: 'CDN Integration', enable: true },
          { text: 'Advanced Settings', enable: true },
          { text: '100,000 unique users', enable: false },
          { text: '2000 Items', enable: false },
          { text: 'API Access', enable: false },
          { text: 'Search Features', enable: false },
          { text: 'Editor personalization', enable: false },
          { text: 'Upload special sites', enable: false },
          { text: 'Advanced Features', enable: false },
        ]
      },
      {
        id: 'standard-yearly', name: 'Standard', price: 99, icon: 'ph-grains', bgColor: 'bg-light-secondary', buttonText: 'Upgrade Plan', buttonClass: 'btn-outline-secondary', item: [
          { text: 'Free domains', enable: true },
          { text: 'CDN Integration', enable: true },
          { text: 'Advanced Settings', enable: true },
          { text: '100,000 unique users', enable: true },
          { text: '2000 Items', enable: true },
          { text: 'API Access', enable: false },
          { text: 'Search Features', enable: false },
          { text: 'Editor personalization', enable: false },
          { text: 'Upload special sites', enable: false },
          { text: 'Advanced Features', enable: false },
        ]
      },
      {
        id: 'pro-yearly', name: 'Pro', price: 1236, icon: 'ph-flower-lotus', bgColor: 'bg-light-secondary', buttonText: 'Upgrade Plan', buttonClass: 'btn-outline-secondary', item: [
          { text: 'Free domains', enable: true },
          { text: 'CDN Integration', enable: true },
          { text: 'Advanced Settings', enable: true },
          { text: '100,000 unique users', enable: true },
          { text: '2000 Items', enable: true },
          { text: 'API Access', enable: true },
          { text: 'Search Features', enable: true },
          { text: 'Editor personalization', enable: false },
          { text: 'Upload special sites', enable: false },
          { text: 'Advanced Features', enable: false },
        ]
      },
      {
        id: 'enterprise-yearly', name: 'ENTERPRISE', price: 3469, icon: 'ph-buildings', bgColor: 'bg-light-secondary', buttonText: 'Upgrade Plan', buttonClass: 'btn-outline-secondary', item: [
          { text: 'Free domains', enable: true },
          { text: 'CDN Integration', enable: true },
          { text: 'Advanced Settings', enable: true },
          { text: '100,000 unique users', enable: true },
          { text: '2000 Items', enable: true },
          { text: 'API Access', enable: true },
          { text: 'Search Features', enable: true },
          { text: 'Editor personalization', enable: true },
          { text: 'Upload special sites', enable: true },
          { text: 'Advanced Features', enable: true },
        ]
      }
    ]
  };

  // Track the state of the pricing switch
  isAnnual = true;
}