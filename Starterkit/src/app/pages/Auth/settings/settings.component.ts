import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [BreadcrumbComponent, NgxDropzoneModule, NgbTooltipModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  onSelect(event: any) {
    console.log(event);
    // Handle the selected files here
  }

  onUpload() {
    // Handle the file upload logic here
  }
}
