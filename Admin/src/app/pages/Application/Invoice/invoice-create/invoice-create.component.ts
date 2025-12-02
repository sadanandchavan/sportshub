import { ChangeDetectorRef, Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-invoice-create',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    RouterOutlet,
    RouterLink,
    CommonModule,
    NgbTooltipModule,
  ],
  templateUrl: './invoice-create.component.html',
  styleUrl: './invoice-create.component.css',
})
export class InvoiceCreateComponent {
  constructor() {}

  selectAddressSection = true;

  change() {}

  changeLayout() {
    this.selectAddressSection = !this.selectAddressSection;
  }
}
