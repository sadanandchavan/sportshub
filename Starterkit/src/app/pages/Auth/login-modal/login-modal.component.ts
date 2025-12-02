import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {

}
