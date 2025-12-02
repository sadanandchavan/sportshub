import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbModule, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ac-slider',
  standalone: true,
  imports: [NgbModule,CommonModule],
  templateUrl: './ac-slider.component.html',
  styleUrls: ['./ac-slider.component.css'],
})
export class AcSliderComponent {

  @ViewChild('carousel') carousel: NgbCarousel;
  @ViewChild('customizeCorosel', { static: true }) customizeCorosel: NgbCarousel;

  images = [
    '../assets/images/slider/img-slide-1.jpg',
    '../assets/images/slider/img-slide-2.jpg',
    '../assets/images/slider/img-slide-3.jpg'
  ];
  currantSlideId: string = 'slide-0';
  customizeSlideId: string = 'slide-0';

  selectSlide(slideId: string) {
    this.currantSlideId = slideId;
    this.carousel.select(this.currantSlideId);
  }

  selectSlideCustomize(slideId: string) {
    this.customizeSlideId = slideId;
    this.customizeCorosel.select(this.customizeSlideId);
  }

  onCustomizeCurrantSlideChange(event) {
    this.customizeSlideId = event.current
  }

  onCurrantSlideChange(event) {
    this.currantSlideId = event.current
  }
}

