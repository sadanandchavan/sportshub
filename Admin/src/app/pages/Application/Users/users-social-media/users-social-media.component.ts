import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { GallarySectionComponent } from './sections/gallary-section/gallary-section.component';
import { FriendsSectionComponent } from './sections/friends-section/friends-section.component';
import { FollowersSectionComponent } from './sections/followers-section/followers-section.component';
import { UserProfileSectionComponent } from './sections/profile-section/profile-section.component';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-social-media',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    LightboxModule,
    NgbModule,
    GallarySectionComponent,
    FriendsSectionComponent,
    FollowersSectionComponent,
    UserProfileSectionComponent,
  ],
  templateUrl: './users-social-media.component.html',
  styleUrl: './users-social-media.component.css',
})
export class UsersSocialMediaComponent {
  @ViewChildren(NgbDropdown) dropdowns: QueryList<NgbDropdown>;

  toggleDropdown(dropdown: NgbDropdown) {
    if (dropdown.isOpen()) {
      dropdown.close();
    } else {
      dropdown.open();
    }
  }
  constructor(private lightbox: Lightbox) {}

  album = [
    {
      src: '../assets/images/application/img-soc-gal-1.jpg',
      thumb: '../assets/images/application/img-soc-gal-1.jpg',
    },
    {
      src: '../assets/images/application/img-soc-gal-2.jpg',
      thumb: '../assets/images/application/img-soc-gal-2.jpg',
    },
    {
      src: '../assets/images/application/img-soc-gal-3.jpg',
      thumb: '../assets/images/application/img-soc-gal-3.jpg',
    },
    {
      src: '../assets/images/application/img-soc-gal-4.jpg',
      thumb: '../assets/images/application/img-soc-gal-4.jpg',
    },
    {
      src: '../assets/images/application/img-soc-gal-5.jpg',
      thumb: '../assets/images/application/img-soc-gal-5.jpg',
    },
    {
      src: '../assets/images/application/img-soc-gal-6.jpg',
      thumb: '../assets/images/application/img-soc-gal-6.jpg',
    },
    {
      src: '../assets/images/application/img-soc-gal-7.jpg',
      thumb: '../assets/images/application/img-soc-gal-7.jpg',
    },
    {
      src: '../assets/images/application/img-soc-gal-8.jpg',
      thumb: '../assets/images/application/img-soc-gal-8.jpg',
    },
    {
      src: '../assets/images/application/img-soc-gal-9.jpg',
      thumb: '../assets/images/application/img-soc-gal-9.jpg',
    },
  ];

  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
