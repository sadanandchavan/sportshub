import { Component, QueryList, ViewChildren } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import {
  NgbDropdown,
  NgbModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [BreadcrumbComponent, NgbModule, NgbTooltipModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
})
export class DataComponent {
  @ViewChildren(NgbDropdown) dropdowns: QueryList<NgbDropdown>;
  toggleDropdown(dropdown: NgbDropdown) {
    if (dropdown.isOpen()) {
      dropdown.close();
    } else {
      dropdown.open();
    }
  }
}
