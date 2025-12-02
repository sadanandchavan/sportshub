import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxModule } from 'ngx-lightbox';

@Component({
  selector: 'app-ac-lightbox',
  standalone: true,
  imports: [LightboxModule, CommonModule],
  templateUrl: './ac-lightbox.component.html',
  styleUrl: './ac-lightbox.component.css',
})
export class AcLightboxComponent implements OnInit {
  public album = [];

  constructor(private lightbox: Lightbox) {}

  ngOnInit(): void {
    this.album = [
      {
        src: '../assets/images/light-box/l1.jpg',
        caption: 'Image 1',
        thumb: '../assets/images/light-box/sl1.jpg'
      },
      {
        src: '../assets/images/light-box/l2.jpg',
        caption: 'Image 2',
        thumb: '../assets/images/light-box/sl2.jpg'
      },
      {
        src: '../assets/images/light-box/l3.jpg',
        caption: 'Image 3',
        thumb: '../assets/images/light-box/sl3.jpg'
      },
      {
        src: '../assets/images/light-box/l4.jpg',
        caption: 'Image 4',
        thumb: '../assets/images/light-box/sl4.jpg'
      },
      {
        src: '../assets/images/light-box/l5.jpg',
        caption: 'Image 5',
        thumb: '../assets/images/light-box/sl5.jpg'
      },
      {
        src: '../assets/images/light-box/l6.jpg',
        caption: 'Image 6',
        thumb: '../assets/images/light-box/sl6.jpg'
      }
    ];
  }

  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
