import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BreadcrumbComponent } from '../../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-add',
  standalone: true,
  imports: [BreadcrumbComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './teacher-add.component.html',
  styleUrl: './teacher-add.component.css'
})
export class TeacherAddComponent {
  teacherForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.teacherForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      joiningDate: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      gender: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      education: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    
  }

}
