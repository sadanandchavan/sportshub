import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-e-commerce-product-list',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NgxPaginationModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './e-commerce-product-list.component.html',
  styleUrl: './e-commerce-product-list.component.css',
})
export class ECommerceProductListComponent {
  products = [
    {
      id: 7,
      name: 'Apple Series 4 GPS A38 MM Space',
      category: 'Electronics, Laptop',
      price: '$14.59',
      qty: 70,
      status: 'text-success ph-duotone ph-check-circle',
      img: '../assets/images/application/img-prod-1.jpg',
      brandImg: '../assets/images/application/img-prod-brand-1.png',
    },
    {
      id: 2,
      name: 'Boat On-Ear Wireless',
      category: 'Electronics, Headphones',
      price: '$81.99',
      qty: 45,
      status: 'ph-duotone ph-clock-countdown text-warning',
      img: '../assets/images/application/img-prod-2.jpg',
      brandImg: '../assets/images/application/img-prod-brand-2.png',
    },
    {
      id: 3,
      name: 'Samsung Galaxy S21 Ultra',
      category: 'Electronics, Smartphone',
      price: '$999.99',
      qty: 30,
      status: 'ph-duotone ph-x-circle text-danger ',
      img: '../assets/images/application/img-prod-3.jpg',
      brandImg: '../assets/images/application/img-prod-brand-3.png',
    },
    {
      id: 4,
      name: 'Sony WH-1000XM4',
      category: 'Electronics, Headphones',
      price: '$349.99',
      qty: 25,
      status: 'text-success ph-duotone ph-check-circle',
      img: '../assets/images/application/img-prod-4.jpg',
      brandImg: '../assets/images/application/img-prod-brand-4.png',
    },
    {
      id: 5,
      name: 'Dell XPS 13',
      category: 'Electronics, Laptop',
      price: '$1,199.00',
      qty: 10,
      status: 'ph-duotone ph-clock-countdown text-warning',
      img: '../assets/images/application/img-prod-5.jpg',
      brandImg: '../assets/images/application/img-prod-brand-2.png',
    },
    {
      id: 6,
      name: 'Apple AirPods Pro',
      category: 'Electronics, Headphones',
      price: '$249.00',
      qty: 60,
      status: 'text-success ph-duotone ph-check-circle',
      img: '../assets/images/application/img-prod-6.jpg',
      brandImg: '../assets/images/application/img-prod-brand-3.png',
    },
    {
      id: 8,
      name: 'LG 55 Inch 4K UHD TV',
      category: 'Electronics, TV',
      price: '$499.99',
      qty: 15,
      status: 'ph-duotone ph-clock-countdown text-warning',
      img: '../assets/images/application/img-prod-7.jpg',
      brandImg: '../assets/images/application/img-prod-brand-3.png',
    },
    {
      id: 9,
      name: 'GoPro HERO 9 Black',
      category: 'Electronics, Camera',
      price: '$399.99',
      qty: 20,
      status: 'text-success ph-duotone ph-check-circle',
      img: '../assets/images/application/img-prod-8.jpg',
      brandImg: '../assets/images/application/img-prod-brand-1.png',
    },
    {
      id: 10,
      name: 'Amazon Echo Dot',
      category: 'Electronics, Smart Home',
      price: '$49.99',
      qty: 100,
      status: 'text-success ph-duotone ph-check-circle',
      img: '../assets/images/application/img-prod-9.jpg',
      brandImg: '../assets/images/application/img-prod-brand-2.png',
    },
    {
      id: 7,
      name: 'Apple Series 4 GPS A38 MM Space',
      category: 'Electronics, Laptop',
      price: '$14.59',
      qty: 70,
      status: 'text-success ph-duotone ph-check-circle',
      img: '../assets/images/application/img-prod-1.jpg',
      brandImg: '../assets/images/application/img-prod-brand-1.png',
    },
    {
      id: 2,
      name: 'Boat On-Ear Wireless',
      category: 'Electronics, Headphones',
      price: '$81.99',
      qty: 45,
      status: 'ph-duotone ph-clock-countdown text-warning',
      img: '../assets/images/application/img-prod-2.jpg',
      brandImg: '../assets/images/application/img-prod-brand-2.png',
    },
    {
      id: 3,
      name: 'Samsung Galaxy S21 Ultra',
      category: 'Electronics, Smartphone',
      price: '$999.99',
      qty: 30,
      status: 'text-success ph-duotone ph-check-circle',
      img: '../assets/images/application/img-prod-3.jpg',
      brandImg: '../assets/images/application/img-prod-brand-3.png',
    },
    {
      id: 4,
      name: 'Sony WH-1000XM4',
      category: 'Electronics, Headphones',
      price: '$349.99',
      qty: 25,
      status: 'text-success ph-duotone ph-check-circle',
      img: '../assets/images/application/img-prod-4.jpg',
      brandImg: '../assets/images/application/img-prod-brand-4.png',
    },
    {
      id: 5,
      name: 'Dell XPS 13',
      category: 'Electronics, Laptop',
      price: '$1,199.00',
      qty: 10,
      status: 'ph-duotone ph-clock-countdown text-warning',
      img: '../assets/images/application/img-prod-5.jpg',
      brandImg: '../assets/images/application/img-prod-brand-5.png',
    },
    {
      id: 6,
      name: 'Apple AirPods Pro',
      category: 'Electronics, Headphones',
      price: '$249.00',
      qty: 60,
      status: 'text-success ph-duotone ph-check-circle',
      img: '../assets/images/application/img-prod-6.jpg',
      brandImg: '../assets/images/application/img-prod-brand-4.png',
    },
    {
      id: 8,
      name: 'LG 55 Inch 4K UHD TV',
      category: 'Electronics, TV',
      price: '$499.99',
      qty: 15,
      status: 'ph-duotone ph-clock-countdown text-warning',
      img: '../assets/images/application/img-prod-7.jpg',
      brandImg: '../assets/images/application/img-prod-brand-3.png',
    },
    {
      id: 9,
      name: 'GoPro HERO 9 Black',
      category: 'Electronics, Camera',
      price: '$399.99',
      qty: 20,
      status: 'text-success ph-duotone ph-check-circle',
      img: '../assets/images/application/img-prod-8.jpg',
      brandImg: '../assets/images/application/img-prod-brand-2.png',
    },
    {
      id: 10,
      name: 'Amazon Echo Dot',
      category: 'Electronics, Smart Home',
      price: '$49.99',
      qty: 100,
      status: 'text-success ph-duotone ph-check-circle',
      img: '../assets/images/application/img-prod-9.jpg',
      brandImg: '../assets/images/application/img-prod-brand-1.png',
    },
  ];

  p: number = 1; // current page
  itemsPerPage: number = 5; // items per page
  searchText1: string = ''; // Property for search text
  entriesOptions: number[] = [5, 10, 15];

  get filteredData() {
    return this.products.filter(
      (row) =>
        row.name.toLowerCase().includes(this.searchText1.toLowerCase()) ||
        row.category.toLowerCase().includes(this.searchText1.toLowerCase()) ||
        row.status.toLowerCase().includes(this.searchText1.toLowerCase())
    );
  }


}
