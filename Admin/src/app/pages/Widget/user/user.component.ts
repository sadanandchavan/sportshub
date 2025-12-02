import { Component, QueryList, ViewChildren } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [BreadcrumbComponent, NgbModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @ViewChildren(NgbDropdown) dropdowns: QueryList<NgbDropdown>;

  toggleDropdown(dropdown: NgbDropdown) {
    if (dropdown.isOpen()) {
      dropdown.close();
    } else {
      dropdown.open();
    }
  }
}
