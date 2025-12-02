import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-e-commerce-product',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    RouterOutlet,
    RouterLink,
    CommonModule,
    SimplebarAngularModule,
    NgbModule,
  ],
  templateUrl: './e-commerce-product.component.html',
  styleUrl: './e-commerce-product.component.css',
})
export class ECommerceProductComponent {
  isFilterCollapse = false;

  options = { autoHide: true };

  innerObjCollpseObj = {
    gender: false,
    categories: false,
    colors: false,
    price: false,
    rating: false,
  };

  products = [
    {
      image: '../assets/images/application/img-prod-1.jpg',
      name: 'Apple watch -4',
      price: 299.0,
      originalPrice: 399.0,
      rating: 4.5,
      discount: null,
      detailsLink: '/e-commerce-product-details',
    },
    {
      image: '../assets/images/application/img-prod-2.jpg',
      name: 'Apple watch -4',
      price: 299.0,
      originalPrice: 399.0,
      rating: 4.5,
      discount: 30,
      detailsLink: '/e-commerce-product-details',
    },
    {
      image: '../assets/images/application/img-prod-3.jpg',
      name: 'Apple watch -4',
      price: 299.0,
      originalPrice: 399.0,
      rating: 4.5,
      discount: null,
      detailsLink: '/e-commerce-product-details',
    },
    {
      image: '../assets/images/application/img-prod-4.jpg',
      name: 'Apple watch -4',
      price: 299.0,
      originalPrice: 399.0,
      rating: 4.5,
      discount: 30,
      detailsLink: '/e-commerce-product-details',
    },
    {
      image: '../assets/images/application/img-prod-5.jpg',
      name: 'Apple watch -4',
      price: 299.0,
      originalPrice: 399.0,
      rating: 4.5,
      discount: null,
      detailsLink: '/e-commerce-product-details',
    },
    {
      image: '../assets/images/application/img-prod-6.jpg',
      name: 'Apple watch -4',
      price: 299.0,
      originalPrice: 399.0,
      rating: 4.5,
      discount: 30,
      detailsLink: '/e-commerce-product-details',
    },
    {
      image: '../assets/images/application/img-prod-7.jpg',
      name: 'Apple watch -4',
      price: 299.0,
      originalPrice: 399.0,
      rating: 4.5,
      discount: null,
      detailsLink: '/e-commerce-product-details',
    },
    {
      image: '../assets/images/application/img-prod-8.jpg',
      name: 'Apple watch -4',
      price: 299.0,
      originalPrice: 399.0,
      rating: 4.5,
      discount: 30,
      detailsLink: '/e-commerce-product-details',
    },
    {
      image: '../assets/images/application/img-prod-9.jpg',
      name: 'Apple watch -4',
      price: 299.0,
      originalPrice: 399.0,
      rating: 4.5,
      discount: null,
      detailsLink: '/e-commerce-product-details',
    },
  ];
}
