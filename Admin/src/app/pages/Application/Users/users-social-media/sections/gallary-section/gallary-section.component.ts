import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Lightbox, LightboxModule } from 'ngx-lightbox';

@Component({
  selector: 'app-gallary-section',
  standalone: true,
  imports: [CommonModule, LightboxModule],
  templateUrl: './gallary-section.component.html',
  styleUrl: './gallary-section.component.css'
})
export class GallarySectionComponent {

  gallery = [
    {
      src: '../assets/images/application/img-gallery-1.jpg',
      thumb: '../assets/images/application/img-gallery-1.jpg'
    },
    {
      src: '../assets/images/application/img-gallery-2.jpg',
      thumb: '../assets/images/application/img-gallery-2.jpg'
    },
    {
      src: '../assets/images/application/img-gallery-3.jpg',
      thumb: '../assets/images/application/img-gallery-3.jpg'
    },
    {
      src: '../assets/images/application/img-gallery-4.jpg',
      thumb: '../assets/images/application/img-gallery-4.jpg'
    },
    {
      src: '../assets/images/application/img-gallery-5.jpg',
      thumb: '../assets/images/application/img-gallery-5.jpg'
    },
    {
      src: '../assets/images/application/img-gallery-6.jpg',
      thumb: '../assets/images/application/img-gallery-6.jpg'
    },
    {
      src: '../assets/images/application/img-gallery-7.jpg',
      thumb: '../assets/images/application/img-gallery-7.jpg'
    },
    {
      src: '../assets/images/application/img-gallery-8.jpg',
      thumb: '../assets/images/application/img-gallery-8.jpg'
    }
  ];

  constructor(private _lightbox: Lightbox) { }

  open(index: number): void {
    this._lightbox.open(this.gallery, index);
  }

}
