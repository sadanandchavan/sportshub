import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from '../../../../Component/flatpickr/flatpickr.module';

@Component({
  selector: 'app-form-timepicker',
  standalone: true,
  imports: [BreadcrumbComponent, FlatpickrModule, CommonModule, FormsModule],
  templateUrl: './form-timepicker.component.html',
  styleUrl: './form-timepicker.component.css'
})
export class FormTimepickerComponent {

}
