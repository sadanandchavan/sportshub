import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent {
  items = [
    { name: 'Australia', value: '61424' },
    { name: 'India', value: '76975' },
    { name: 'Russia', value: '97586' },
    { name: 'London', value: '19675' },
    { name: 'Dubai', value: '60614' },
    { name: 'Australia', value: '61424' },
    { name: 'India', value: '76975' },
    { name: 'Russia', value: '97586' },
    { name: 'India', value: '76975' },
    { name: 'Dubai', value: '60614' },
    { name: 'London', value: '19675' },
    { name: 'Dubai', value: '60614' },
    { name: 'Australia', value: '61424' },
    { name: 'India', value: '76975' },
    { name: 'Russia', value: '97586' },
    { name: 'London', value: '19675' },
    { name: 'Dubai', value: '60614' },
    { name: 'Australia', value: '61424' },
    { name: 'India', value: '76975' },
    { name: 'Russia', value: '97586' },
    { name: 'London', value: '19675' },
    { name: 'Dubai', value: '60614' },
    { name: 'Dubai', value: '60614' },
    { name: 'Australia', value: '61424' },
    { name: 'London', value: '19675' },
    { name: 'Dubai', value: '60614' },
    { name: 'Dubai', value: '60614' },
    { name: 'Australia', value: '61424' },
    { name: 'London', value: '19675' },
    { name: 'Dubai', value: '60614' },
  ];
}
