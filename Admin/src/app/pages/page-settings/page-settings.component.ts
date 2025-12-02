import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-page-settings',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './page-settings.component.html',
  styleUrl: './page-settings.component.css'
})
export class PageSettingsComponent {

}
