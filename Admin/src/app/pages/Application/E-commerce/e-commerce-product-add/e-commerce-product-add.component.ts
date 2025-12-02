import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-e-commerce-product-add',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, NgbTooltipModule],
  templateUrl: './e-commerce-product-add.component.html',
  styleUrl: './e-commerce-product-add.component.css',
})
export class ECommerceProductAddComponent {}
