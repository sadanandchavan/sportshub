import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../../layouts/breadcrumb/breadcrumb.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [BreadcrumbComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      registrationDate: ['', Validators.required],
      idNumber: ['', Validators.required],
      course: ['Course', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      gender: ['female', Validators.required],
      parentsName: ['', Validators.required],
      parentsMobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      dateOfBirth: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      shippingAddress: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.studentForm.valid) {
      console.log(this.studentForm.value);
    }
  }
  

}
