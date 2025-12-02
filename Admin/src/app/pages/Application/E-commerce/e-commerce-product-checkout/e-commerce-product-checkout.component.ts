import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-e-commerce-product-checkout',
  standalone: true,
  imports: [BreadcrumbComponent,CommonModule,NgbModule],
  templateUrl: './e-commerce-product-checkout.component.html',
  styleUrl: './e-commerce-product-checkout.component.css'
})
export class ECommerceProductCheckoutComponent {

  isCollapsed: boolean = true;
  addresses = [
    {
      name: 'Ian Carpenter',
      type: 'Home',
      details: '1754 Ureate Path, 695 Newga View, Seporcus, Rhode Island, Belgium - SA5 5BO',
      phone: '+91 1234567890'
    },
    // Add more address objects as needed
  ];

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  deleteAddress(index: number) {
    this.addresses.splice(index, 1);
  }

  saveNewAddress() {
    // Logic to save a new address
  }

}
