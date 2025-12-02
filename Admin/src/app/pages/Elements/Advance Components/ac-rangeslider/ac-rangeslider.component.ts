import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ac-rangeslider',
  standalone: true,
  imports: [NgxSliderModule, FormsModule, CommonModule],
  templateUrl: './ac-rangeslider.component.html',
  styleUrl: './ac-rangeslider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AcRangesliderComponent {
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200,
  };
  minValue: number = 250;
  maxValue: number = 450;
  options1: Options = {
    floor: 10,
    ceil: 1000,
    step: 5,
  };
  value2: number = 5;
  options2: Options = {
    floor: 0,
    ceil: 20,
    step: 1,
  };
  sliderEnabled: boolean = false;

  toggleSlider() {
    this.sliderEnabled = !this.sliderEnabled;
  }
  rValue: number = 128;
  gValue: number = 128;
  bValue: number = 128;

  rOptions: Options = {
    floor: 0,
    ceil: 255,
    step: 1,
    showTicks: true,
    showTicksValues: true,
    getTickColor: () => '#000',
    getPointerColor: () => '#f00', // Customize the pointer color if needed
  };

  gOptions: Options = {
    floor: 0,
    ceil: 255,
    step: 1,
    showTicks: true,
    showTicksValues: true,
    getTickColor: () => '#000',
    getPointerColor: () => '#0f0',
  };

  bOptions: Options = {
    floor: 0,
    ceil: 255,
    step: 1,
    showTicks: true,
    showTicksValues: true,
    getTickColor: () => '#000',
    getPointerColor: () => '#00f',
  };

  updateColor() {
    const rgbColor = `rgb(${this.rValue}, ${this.gValue}, ${this.bValue})`;
    document.getElementById('RGB')!.style.backgroundColor = rgbColor;
  }
  value4: number = 5;

  options4: Options = {
    floor: 0,
    ceil: 10,
    vertical: true,
  };
  valueA: number = 50;
  valueB: number = 75;

  optionsA: Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    showTicks: true,
    showTicksValues: true,
  };

  optionsB: Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    showTicks: true,
    showTicksValues: true,
  };
  value5: number = 0;
  showSlider: boolean = true;

  options5: Options = {
    floor: -5,
    ceil: 20,
    step: 1,
  };

  toggleSlider5() {
    this.showSlider = !this.showSlider;
  }
  value6: number = 3; // Initial slider value

  options6: Options = {
    floor: 0,
    ceil: 5,
    step: 1,
    showTicks: true, // Optional: Show tick marks on slider
    showTicksValues: true, // Optional: Show tick values
  };
  value8: number = 14; // Initial slider value

  options8: Options = {
    floor: 0,
    ceil: 20,
    step: 1,
  };
  value9: number = 0; // Initial slider value

  options9: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
  };
  value10: number = 0; // Initial slider value

  options10: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
  };
  value11: number = 0; // Initial slider value

  options11: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
  };
  value12a: number = 100;
  options12a: Options = {
    floor: 0,
    ceil: 200,
  };
  minValue1: number = 250;
  maxValue1: number = 450;
  options12b: Options = {
    floor: 10,
    ceil: 1000,
    step: 5,
  };
  minValue2: number = 100;
  maxValue2: number = 550;
  options12c: Options = {
    floor: 10,
    ceil: 1000,
    step: 5,
  };
  value13: number = 14; // Initial slider value

  options13: Options = {
    floor: 0,
    ceil: 4,
    step: 1,
    showTicks: true,
    showTicksValues: true,
    tickStep: 10,
    ticksTooltip: (value: number): string => `$${value}`,
    tickValueStep: 10,
  };

  ticks: number[] = [0, 100, 200, 300, 400];
  value14: number = 14; // Initial slider value

  options14: Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    showTicks: true,
    showTicksValues: true,
    ticksTooltip: (value: number): string => `$${value}`,
  };

  ticks1: number[] = [0, 10, 20, 30, 40];
  value15: number = 5000000; // Initial slider value

  options15: Options = {
    floor: 1000,
    ceil: 10000000,
    step: 5,
  };
  value16: number = 100;
  options16: Options = {
    floor: 0,
    ceil: 200,
  };
  minValue4: number = 10;
  maxValue4: number = 1000;
  options17: Options = {
    floor: 10,
    ceil: 1000,
    step: 5,
  };
  value18: number = 100;
  options18: Options = {
    floor: 0,
    ceil: 200,
  };
  minValue5: number = 240;
  maxValue5: number = 680;
  options19: Options = {
    floor: 10,
    ceil: 1000,
    step: 5,
  };
  value22: number = 14; // Initial slider value

  options22: Options = {
    floor: 0,
    ceil: 7,
    step: 1,
    showTicks: true,
    showTicksValues: true,
  };

  getHighlights(): { start: number; end: number; color: string }[] {
    return [
      { start: 2, end: 5, color: 'rgba(255, 0, 0, 0.3)' },
      { start: 7, end: 8, color: 'rgba(0, 255, 0, 0.3)' },
      { start: 17, end: 19, color: 'rgba(0, 0, 255, 0.3)' },
    ];
  }
  value23: number = 2; // Initial value for the first slider
  value24: number = 14; // Initial value for the second slider

  options23: Options = {
    floor: 0,
    ceil: 4,
    step: 0.01,
    showTicks: true,
    showTicksValues: true,
  };

  options24: Options = {
    floor: -5,
    ceil: 20,
    step: 1,
  };
}
