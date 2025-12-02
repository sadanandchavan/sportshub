import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BreadcrumbComponent } from '../../../../../layouts/breadcrumb/breadcrumb.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BreadcrumbComponent,
    NgxDropzoneModule,
    NgxDropzoneModule,
    CommonModule,
  ],
  templateUrl: './course-add.component.html',
  styleUrl: './course-add.component.css',
})
export class CourseAddComponent {
  courseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      courseName: ['', Validators.required],
      courseCode: ['', Validators.required],
      startFrom: ['', Validators.required],
      courseDuration: ['', Validators.required],
      coursePrice: ['', [Validators.required, Validators.min(0)]],
      teacherName: ['', Validators.required],
      maxStudents: ['', [Validators.required, Validators.min(1)]],
      courseStatus: ['Deactive', Validators.required],
      courseDetails: [''],
      file: [null],
    });
  }

  onSubmit() {}
  files: any[] = []; // Using any type to hold both File and URL for preview

  onSelect(event: any) {
    // Handle the files added
    for (let file of event.addedFiles) {
      // Create a preview URL for each image file
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          file.preview = e.target.result; // Store the image preview URL
          this.files.push(file); // Push the file object with the preview URL
        };
        reader.readAsDataURL(file);
      } else {
        // Handle non-image files (optional)
        this.files.push(file);
      }
    }
  }

  onRemove(file: any) {
    // Remove the file from the list
    this.files.splice(this.files.indexOf(file), 1);
  }

  ngOnDestroy() {
    // Clean up file URLs when component is destroyed to avoid memory leaks
    this.files.forEach((file) => {
      if (file.preview) {
        URL.revokeObjectURL(file.preview);
      }
    });
  }
}
