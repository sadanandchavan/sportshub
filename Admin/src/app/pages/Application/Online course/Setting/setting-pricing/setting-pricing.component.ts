import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-setting-pricing',
  standalone: true,
  imports: [CommonModule,BreadcrumbComponent],
  templateUrl: './setting-pricing.component.html',
  styleUrl: './setting-pricing.component.css'
})
export class SettingPricingComponent {
  // Define tabs data
  tabs = [
    { id: 'pills-home', label: 'Monthly', badge: '', badgeClass: '' },
    { id: 'pills-profile', label: 'Yearly', badge: 'Save 30%', badgeClass: 'bg-primary' }
  ];

  // Define pricing data
  pricingPlans = {
    Monthly: [
      {
        name: 'Basic', services: '03 Services', price: '$69', isPopular: false, items: [
          { text: 'One End Product', enable:true },
          { text: 'No attribution required', enable:true },
          { text: 'TypeScript', enable:true },
          { text: 'Figma Design Resources', enable:false },
          { text: 'Create Multiple Products', enable:false },
          { text: 'Create a SaaS Project', enable:false },
          { text: 'Resale Product', enable:false },
          { text: 'Separate sale of our UI Elements?', enable:false }
        ]
      },
      {
        name: 'Standard', services: '05 Services', price: '$129', isPopular: true, items: [
          { text: 'One End Product', enable: true },
          { text: 'No attribution required', enable: true },
          { text: 'TypeScript', enable: true },
          { text: 'Figma Design Resources', enable: true },
          { text: 'Create Multiple Products', enable: true },
          { text: 'Create a SaaS Project', enable: false },
          { text: 'Resale Product', enable: false },
          { text: 'Separate sale of our UI Elements?', enable: false }
        ]
      },
      {
        name: 'Premium', services: '08 Services', price: '$599', isPopular: false, items: [
          { text: 'One End Product', enable: true },
          { text: 'No attribution required', enable: true },
          { text: 'TypeScript', enable: true },
          { text: 'Figma Design Resources', enable: true },
          { text: 'Create Multiple Products', enable: true },
          { text: 'Create a SaaS Project', enable: true },
          { text: 'Resale Product', enable: true },
          { text: 'Separate sale of our UI Elements?', enable: true }
        ]
      }
    ],
    Yearly: [
      {
        name: 'Basic', services: '03 Services', price: '$269', isPopular: false, items: [
          { text: 'One End Product', enable: true },
          { text: 'No attribution required', enable: true },
          { text: 'TypeScript', enable: true },
          { text: 'Figma Design Resources', enable: false },
          { text: 'Create Multiple Products', enable: false },
          { text: 'Create a SaaS Project', enable: false },
          { text: 'Resale Product', enable: false },
          { text: 'Separate sale of our UI Elements?', enable: false }
        ]
      },
      {
        name: 'Standard', services: '05 Services', price: '$529', isPopular: true, items: [
          { text: 'One End Product', enable: true },
          { text: 'No attribution required', enable: true },
          { text: 'TypeScript', enable: true },
          { text: 'Figma Design Resources', enable: true },
          { text: 'Create Multiple Products', enable: true },
          { text: 'Create a SaaS Project', enable: false },
          { text: 'Resale Product', enable: false },
          { text: 'Separate sale of our UI Elements?', enable: false }
        ]
      },
      {
        name: 'Premium', services: '08 Services', price: '$1299', isPopular: false, items: [
          { text: 'One End Product', enable: true },
          { text: 'No attribution required', enable: true },
          { text: 'TypeScript', enable: true },
          { text: 'Figma Design Resources', enable: true },
          { text: 'Create Multiple Products', enable: true },
          { text: 'Create a SaaS Project', enable: true },
          { text: 'Resale Product', enable: true },
          { text: 'Separate sale of our UI Elements?', enable: true }
        ]
      }
    ]
  };

  // Track the active tab
  activeTab = 'Monthly';
}
