import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { QuillModule } from 'ngx-quill';
import { BreadcrumbComponent } from '../../../../../layouts/breadcrumb/breadcrumb.component';
import Quill from 'quill';

@Component({
  selector: 'app-ticket-create',
  standalone: true,
  imports: [
    EditorModule,
    CommonModule,
    FormsModule,
    QuillModule,
    NgxDropzoneModule,
    BreadcrumbComponent,
    NgxDropzoneModule,
  ],
  templateUrl: './ticket-create.component.html',
  styleUrl: './ticket-create.component.css',
})
export class TicketCreateComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const quill = new Quill('#tinymce-editor', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block'],
        ],
      },
      placeholder: 'Type your text here...',
      theme: 'snow',
    });
  }
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
