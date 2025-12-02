import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-border-table',
  standalone: true,
  imports: [BreadcrumbComponent,CommonModule],
  templateUrl: './border-table.component.html',
  styleUrl: './border-table.component.css'
})
export class BorderTableComponent {
  users = [
    { firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
    { firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
    { firstName: 'Larry', lastName: 'the Bird', username: '@twitter' }
  ];
}
