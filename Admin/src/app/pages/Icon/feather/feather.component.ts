import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import feather from 'feather-icons';

@Component({
  selector: 'app-feather',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule,],
  templateUrl: './feather.component.html',
  styleUrl: './feather.component.css'
})
export class FeatherComponent {

}
