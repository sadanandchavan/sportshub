import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Lightbox, LightboxModule } from 'ngx-lightbox';

@Component({
  selector: 'app-users-profile-section',
  standalone: true,
  imports: [LightboxModule, CommonModule],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.css'
})
export class UserProfileSectionComponent {
  public albums: any[][] = [];

  constructor(private _lightbox: Lightbox) {
    const album1 = [
      {
        src: '../assets/images/application/img-story-2.jpg',
        thumb: '../assets/images/application/img-story-2.jpg',
        avatar: '../assets/images/user/avatar-2.jpg'
      },
      {
        src: '../assets/images/application/img-story-3.jpg',
        thumb: '../assets/images/application/img-story-3.jpg',
        avatar: '../assets/images/user/avatar-3.jpg'
      },
      {
        src: '../assets/images/application/img-story-4.jpg',
        thumb: '../assets/images/application/img-story-4.jpg',
        avatar: '../assets/images/user/avatar-4.jpg'

      },
      {
        src: '../assets/images/application/img-story-5.jpg',
        thumb: '../assets/images/application/img-story-5.jpg',
        avatar: '../assets/images/user/avatar-5.jpg'
      },
      {
        src: '../assets/images/application/img-story-6.jpg',
        thumb: '../assets/images/application/img-story-6.jpg',
        avatar: '../assets/images/user/avatar-1.jpg'
      },
      {
        src: '../assets/images/application/img-story-1.jpg',
        thumb: '../assets/images/application/img-story-1.jpg',
        avatar: '../assets/images/user/avatar-2.jpg'
      },
      {
        src: '../assets/images/application/img-story-2.jpg',
        thumb: '../assets/images/application/img-story-2.jpg',
        avatar: '../assets/images/user/avatar-3.jpg'
      },
      {
        src: '../assets/images/application/img-story-3.jpg',
        thumb: '../assets/images/application/img-story-3.jpg',
        avatar: '../assets/images/user/avatar-4.jpg'
      },
      {
        src: '../assets/images/application/img-story-4.jpg',
        thumb: '../assets/images/application/img-story-4.jpg',
        avatar: '../assets/images/user/avatar-5.jpg'
      },
      {
        src: '../assets/images/application/img-story-5.jpg',
        thumb: '../assets/images/application/img-story-5.jpg',
        avatar: '../assets/images/user/avatar-6.jpg'
      }
    ];

    const album2 = [
      {
        src: '../assets/images/application/img-post-1.jpg',
        thumb: '../assets/images/application/img-post-1.jpg'
      },
      {
        src: '../assets/images/application/img-post-2.jpg',
        thumb: '../assets/images/application/img-post-2.jpg'
      },
      {
        src: '../assets/images/application/img-post-3.jpg',
        thumb: '../assets/images/application/img-post-3.jpg'
      },
      {
        src: '../assets/images/application/img-post-4.jpg',
        thumb: '../assets/images/application/img-post-4.jpg'
      },
      {
        src: '../assets/images/application/img-post-5.jpg',
        thumb: '../assets/images/application/img-post-5.jpg'
      },
      {
        src: '../assets/images/application/img-post-6.jpg',
        thumb: '../assets/images/application/img-post-6.jpg'
      }
    ];

    this.albums.push(album1);
    this.albums.push(album2);
  }

  open(albumIndex: number, imageIndex: number): void {
    this._lightbox.open(this.albums[albumIndex], imageIndex);
  }

  close(): void {
    this._lightbox.close();
  }

}
