import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './sample-page.component.html',
  styleUrl: './sample-page.component.css'
})
export class SamplePageComponent {

}
