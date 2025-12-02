import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { Lightbox, LightboxModule } from 'ngx-lightbox';

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  date: string;
}

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, LightboxModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent {
  public newPublishItems = [
    {
      src: '../assets/images/pages/img-gallery-1.jpg',
      alt: 'Card image',
      title: 'Mountain.jpg',
      date: '12-Aug-2023',
    },
    {
      src: '../assets/images/pages/img-gallery-2.jpg',
      alt: 'Card image',
      title: 'Lily Garden.jpg',
      date: '12-Aug-2023',
    },
    {
      src: '../assets/images/pages/img-gallery-3.jpg',
      alt: 'Card image',
      title: 'Boat Zeel.jpg',
      date: '12-Aug-2023',
    },
  ];

  public oldPublishItems = [
    {
      src: '../assets/images/pages/img-gallery-4.jpg',
      alt: 'Card image',
      title: 'lily.jpg',
      date: '12-Aug-2023',
    },
    {
      src: '../assets/images/pages/img-gallery-5.jpg',
      alt: 'Card image',
      title: 'Mountain Climbing.jpg',
      date: '12-Aug-2023',
    },
    {
      src: '../assets/images/pages/img-gallery-6.jpg',
      alt: 'Card image',
      title: 'Hill Station.jpg',
      date: '12-Aug-2023',
    },
    {
      src: '../assets/images/pages/img-gallery-7.jpg',
      alt: 'Card image',
      title: 'bungee jumping.jpg',
      date: '12-Aug-2023',
    },
    {
      src: '../assets/images/pages/img-gallery-8.jpg',
      alt: 'Card image',
      title: 'Party Time.jpg',
      date: '12-Aug-2023',
    },
    {
      src: '../assets/images/pages/img-gallery-9.jpg',
      alt: 'Card image',
      title: 'Creative Glass Click.jpg',
      date: '12-Aug-2023',
    },
  ];
  private _albums: Array<any> = [];

  constructor(private _lightbox: Lightbox) {
    this.newPublishItems.forEach((item) => {
      const album = {
        src: item.src,
        caption: item.title,
        thumb: item.src,
      };
      this._albums.push(album);
    });
    this.oldPublishItems.forEach((item) => {
      const album = {
        src: item.src,
        caption: item.title,
        thumb: item.src,
      };
      this._albums.push(album);
    });
  }

  open(index: number): void {
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    this._lightbox.close();
  }
}
