import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-layout-vertical',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './layout-vertical.component.html',
  styleUrl: './layout-vertical.component.css'
})
export class LayoutVerticalComponent {

}
