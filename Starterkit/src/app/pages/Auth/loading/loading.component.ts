import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {

  @ViewChild('loaderElem') loaderElem!: ElementRef;
  isLoaderActive: boolean = false;
  fadeInInterval: any;
  fadeOutInterval: any;

  toggleLoader(): void {
    if (!this.isLoaderActive) {
      this.clearIntervals();
      this.fadeIn(3);
      setTimeout(() => {
        this.clearIntervals();
        this.fadeOut(3);
      }, 4000);
    }
  }

  fadeIn(timing: number): void {
    let newValue = 0;
    this.loaderElem.nativeElement.style.display = 'flex';
    this.loaderElem.nativeElement.style.opacity = 0;

    this.fadeInInterval = setInterval(() => {
      if (newValue < 1) {
        newValue += 0.01;
      } else if (newValue >= 1) {
        this.clearIntervals();
      }
      this.loaderElem.nativeElement.style.opacity = newValue;
    }, timing);
  }

  fadeOut(timing: number): void {
    let newValue = 1;
    this.loaderElem.nativeElement.style.opacity = 1;

    this.fadeOutInterval = setInterval(() => {
      if (newValue > 0) {
        newValue -= 0.01;
      } else if (newValue <= 0) {
        this.loaderElem.nativeElement.style.opacity = 0;
        this.loaderElem.nativeElement.style.display = 'none';
        this.clearIntervals();
      }
      this.loaderElem.nativeElement.style.opacity = newValue;
    }, timing);
  }

  clearIntervals(): void {
    clearInterval(this.fadeInInterval);
    clearInterval(this.fadeOutInterval);
  }
 
}
