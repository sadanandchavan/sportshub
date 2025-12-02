import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import Croppr from 'croppr';

@Component({
  selector: 'app-image-crop',
  standalone: true,
  imports: [BreadcrumbComponent,ImageCropComponent],
  templateUrl: './image-crop.component.html',
  styleUrl: './image-crop.component.css'
})
export class ImageCropComponent {

  constructor() { }

  ngOnInit(): void {
    // Initialize component properties if needed
  }

  ngAfterViewInit(): void {
    this.initializeCropper();
  }

  private initializeCropper(): void {
    const cropprElement = document.getElementById('croppr');
    if (cropprElement) {
      new Croppr(cropprElement, {
        // Add any Croppr options here
      });
    }
  }

}
