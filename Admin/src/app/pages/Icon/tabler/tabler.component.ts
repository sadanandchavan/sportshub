import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-tabler',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './tabler.component.html',
  styleUrl: './tabler.component.css'
})
export class TablerComponent {

}
