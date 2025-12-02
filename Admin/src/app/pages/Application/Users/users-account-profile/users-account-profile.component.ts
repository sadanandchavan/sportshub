import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-account-profile',
  standalone: true,
  imports: [BreadcrumbComponent,CommonModule],
  templateUrl: './users-account-profile.component.html',
  styleUrl: './users-account-profile.component.css'
})
export class UsersAccountProfileComponent {

}
