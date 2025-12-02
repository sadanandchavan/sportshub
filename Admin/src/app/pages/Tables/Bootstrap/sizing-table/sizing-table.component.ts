import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sizing-table',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: './sizing-table.component.html',
  styleUrl: './sizing-table.component.css'
})
export class SizingTableComponent {
  users = [
    { firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
    { firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
    { firstName: 'Larry', lastName: 'the Bird', username: '@twitter' }
  ];
}
