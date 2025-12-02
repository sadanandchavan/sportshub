import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quill',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, QuillModule, FormsModule],
  templateUrl: './quill.component.html',
  styleUrl: './quill.component.css'
})
export class QuillComponent {
  editorContent: string = '';

  quillModules = {
    toolbar: [
      [{ 'header': [1, 2, true] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ]
  };
}
