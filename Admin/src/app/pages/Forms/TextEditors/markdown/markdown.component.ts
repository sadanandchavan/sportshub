import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.css'
})
export class MarkdownComponent {

}
