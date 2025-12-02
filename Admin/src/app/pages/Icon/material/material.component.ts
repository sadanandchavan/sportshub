import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {

}
