import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-table',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: './basic-table.component.html',
  styleUrl: './basic-table.component.css',
})
export class BasicTableComponent {
  users = [
    { firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
    { firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
    { firstName: 'Larry', lastName: 'the Bird', username: '@twitter' },
  ];

  usersTwo = [
    { firstName: 'Mark', lastName: 'Otto', username: '@mdo', rowClass: 'table-active' },
    { firstName: 'Jacob', lastName: 'Thornton', username: '@fat', rowClass: '' },
    { firstName: 'Larry', lastName: 'the Bird', username: '@twitter', rowClass: 'table-success' },
    { firstName: 'Larry', lastName: 'the Bird', username: '@twitter', rowClass: '' },
    { firstName: 'Larry', lastName: 'the Bird', username: '@twitter', rowClass: 'table-warning' },
    { firstName: 'Larry', lastName: 'the Bird', username: '@twitter', rowClass: '' },
    { firstName: 'Larry', lastName: 'the Bird', username: '@twitter', rowClass: 'table-danger' },
    { firstName: 'Larry', lastName: 'the Bird', username: '@twitter', rowClass: '' },
    { firstName: 'Larry', lastName: 'the Bird', username: '@twitter', rowClass: 'table-info' }
  ];
}
