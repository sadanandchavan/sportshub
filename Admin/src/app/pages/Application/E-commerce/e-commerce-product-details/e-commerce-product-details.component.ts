import { Component, ViewChild } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import {
  NgbCarousel,
  NgbModule,
  NgbSlideEvent,
} from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-e-commerce-product-details',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    RouterOutlet,
    RouterLink,
    CommonModule,
    NgbModule,
    FormsModule,
  ],
  templateUrl: './e-commerce-product-details.component.html',
  styleUrl: './e-commerce-product-details.component.css',
})
export class ECommerceProductDetailsComponent {
  @ViewChild(NgbCarousel, { static: true }) carousel: NgbCarousel;

  slides = [
    {
      src: '../assets/images/application/img-prod-1.jpg',
      alt: 'Product image 1',
    },
    {
      src: '../assets/images/application/img-prod-2.jpg',
      alt: 'Product image 2',
    },
    {
      src: '../assets/images/application/img-prod-3.jpg',
      alt: 'Product image 3',
    },
    {
      src: '../assets/images/application/img-prod-4.jpg',
      alt: 'Product image 4',
    },
    {
      src: '../assets/images/application/img-prod-5.jpg',
      alt: 'Product image 5',
    },
    {
      src: '../assets/images/application/img-prod-6.jpg',
      alt: 'Product image 6',
    },
    {
      src: '../assets/images/application/img-prod-7.jpg',
      alt: 'Product image 7',
    },
    {
      src: '../assets/images/application/img-prod-8.jpg',
      alt: 'Product image 8',
    },
  ];

  ngOnInit() {}

  currantSlideId: string = 'slide-0';

  selectSlide(slideId: string) {
    this.currantSlideId = slideId;
    this.carousel.select(this.currantSlideId);
  }

  onCurrantSlideChange(event) {
    this.currantSlideId = event.current;
  }
  number: number = 0;

  decreaseValue(): void {
    this.number = Math.max(0, this.number - 1);
  }

  increaseValue(): void {
    this.number += 1;
  }
}
