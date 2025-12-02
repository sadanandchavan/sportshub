import { Component, ViewChild } from '@angular/core';
import { LayoutSettingsService } from '../../layouts/layout-settings.service';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgbModule,CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  @ViewChild('carousel') carousel: NgbCarousel;

  constructor(public settingsService: LayoutSettingsService) {}

  datas = [
    {
      text: 'This is probably one of my favorite admin themes yet. Looks great and easy to use. Support is fantastic too. Thank you',
      name: '- Support',
    },
    {
      text: 'This is probably one of my favorite admin themes yet. Looks great and easy to use. Support is fantastic too. Thank you',
      name: '- Support 2',
    },
    {
      text: 'This is probably one of my favorite admin themes yet. Looks great and easy to use. Support is fantastic too. Thank you',
      name: '- Support 3',
    },
  ];

  ngOnInit() {
    this.updateThemeMode('landing-page');
  }

  updateThemeMode(value) {
    this.settingsService.updateSettings({ islanding: value });
  }

  ngOnDestroy() {
    this.settingsService.updateSettings({ islanding: '' });
  }
  currantSlideId: string = 'slide-0';

  selectSlide(slideId: string) {
    this.currantSlideId = slideId;
    this.carousel.select(this.currantSlideId);
  }

  onCurrantSlideChange(event) {
    this.currantSlideId = event.current;
  }
}
