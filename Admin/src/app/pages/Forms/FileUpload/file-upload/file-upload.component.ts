import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [BreadcrumbComponent, NgxDropzoneModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css',
})
export class FileUploadComponent {
  onSelect(event: any) {
    console.log(event);
    // Handle the selected files here
  }

  onUpload() {
    // Handle the file upload logic here
  }
}
