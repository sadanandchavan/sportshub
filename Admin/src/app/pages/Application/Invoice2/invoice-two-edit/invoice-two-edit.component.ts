import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-invoice-two-edit',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    NgbTooltipModule,
    RouterOutlet,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './invoice-two-edit.component.html',
  styleUrl: './invoice-two-edit.component.css',
})
export class InvoiceTwoEditComponent {
  selectAddressSection = true;

  changeLayout() {
    this.selectAddressSection = !this.selectAddressSection;
  }
}
