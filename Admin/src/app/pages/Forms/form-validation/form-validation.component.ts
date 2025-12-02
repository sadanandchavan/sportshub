import { Component } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms'; // Import NgForm
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css'] // Corrected property name
})
export class FormValidationComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle valid form submission
      console.log('Form submitted successfully', form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
