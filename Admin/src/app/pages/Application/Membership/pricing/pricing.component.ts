import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';

interface PricingCard {
  title: string;
  price: number;
  features: string[];
  colorClass: string;
  textColorClass: string;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule,BreadcrumbComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

  pricingCards: PricingCard[] = [
    {
      title: 'Casual',
      price: 50,
      features: [
        'Full Facility Access',
        'Meals plans',
        '10% Discounts',
        'Cancel anytime'
      ],
      colorClass: 'success',
      textColorClass: 'text-success'
    },
    {
      title: 'Addicted',
      price: 150,
      features: [
        'Full Facility Access',
        'Meals plans',
        '50% Discounts',
        'Cancel anytime',
        'Basic feature'
      ],
      colorClass: 'primary',
      textColorClass: 'text-primary'
    },
    {
      title: 'Diehard',
      price: 250,
      features: [
        'Full Facility Access',
        'Meals plans',
        '75% Discounts',
        'Premium feature',
        'Cancel anytime',
        'Online booking'
      ],
      colorClass: 'warning',
      textColorClass: 'text-warning'
    }
  ];

}
