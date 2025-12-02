import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-invoice-two-create',
  standalone: true,
  imports: [BreadcrumbComponent, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './invoice-two-create.component.html',
  styleUrl: './invoice-two-create.component.css',
})
export class InvoiceTwoCreateComponent {
  selectAddressSection = true;

  change() {}

  changeLayout() {
    this.selectAddressSection = !this.selectAddressSection;
  }
}
