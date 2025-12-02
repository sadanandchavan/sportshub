import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Lightbox, LightboxModule } from 'ngx-lightbox';

export enum tabGrid{
  ShowAll,
  WebDesigner,
  GraphicDesigner,
  AnimationDesigner,
  UiUxDesigner,
  ProductDesigner
}

@Component({
  selector: 'app-masonry',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, NgxMasonryModule, LightboxModule],
  templateUrl: './masonry.component.html',
  styleUrl: './masonry.component.css'
})
export class MasonryComponent {

  tabGrid = tabGrid;

  currantTab = tabGrid.ShowAll;

  images = [
    { src: '../assets/images/gallery-grid/img-grd-gal-1.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-2.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-3.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-4.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-5.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-6.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-7.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.GraphicDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-8.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-9.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-1.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-2.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.UiUxDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-3.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-4.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-5.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-6.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-7.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-8.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.WebDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-9.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-1.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-2.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-3.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-4.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.WebDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-5.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-6.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-7.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-8.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.GraphicDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-9.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.ProductDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-1.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-2.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.ProductDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-3.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-4.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.ProductDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-5.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-6.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-7.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-8.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
    { src: '../assets/images/gallery-grid/img-grd-gal-9.jpg', alt: 'Alexander\'s photograph', avatar: '../assets/images/user/avatar-1.jpg', avatarAlt: 'User Avatar', name: 'Alexander', role: 'Photographer artist',type:tabGrid.AnimationDesigner },
  ];

  constructor(private lightbox: Lightbox) { }

  filteredImages = [...this.images];

  filterImages(type: tabGrid) {
    if (type === tabGrid.ShowAll) {
      this.filteredImages = [...this.images];
    } else {
      this.filteredImages = this.images.filter(image => image.type === type);
    }
    this.currantTab = type;
  }

  openLightbox(image: any) {
    const album = [
      {
        src: image.src,
        caption: image.alt,
        thumb: image.src
      }
    ];
    this.lightbox.open(album, 0);
  }

}
