import { AfterViewInit, Component } from '@angular/core';
import IMask from 'imask';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-form-inputmask',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './form-inputmask.component.html',
  styleUrl: './form-inputmask.component.css'
})
export class FormInputmaskComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // Initialize IMask for the date input fields
    const dateMask = IMask(document.querySelector('.date') as HTMLInputElement, { mask: '00/00/0000' });
    const date2Mask = IMask(document.querySelector('.date2') as HTMLInputElement, { mask: '00-00-0000' });
    const hourMask = IMask(document.querySelector('.hour') as HTMLInputElement, { mask: '00:00:00' });
    const dateHourMask = IMask(document.querySelector('.dateHour') as HTMLInputElement, { mask: '00/00/0000 00:00:00' });
    IMask(document.querySelector('.mob_no') as HTMLInputElement, { mask: '0000-000-000' });
    IMask(document.querySelector('.phone') as HTMLInputElement, { mask: '0000-0000' });
    IMask(document.querySelector('.telphone_with_code') as HTMLInputElement, { mask: '(00) 0000-0000' });
    IMask(document.querySelector('.us_telephone') as HTMLInputElement, { mask: '(000) 000-0000' });
    IMask(document.querySelector('.ip') as HTMLInputElement, { mask: '000.000.000.000' });
    IMask(document.querySelector('.ipv4') as HTMLInputElement, { mask: '000.000.000.0000' });
    IMask(document.querySelector('.ipv6') as HTMLInputElement, { mask: '0000:0000:0000:0:000:0000:0000:0000' });
  
  }
}

