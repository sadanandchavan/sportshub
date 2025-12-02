import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-styling-table',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: './styling-table.component.html',
  styleUrl: './styling-table.component.css'
})
export class StylingTableComponent {
  users = [
    { firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
    { firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
    { firstName: 'Larry', lastName: 'the Bird', username: '@twitter' }
  ];
}
