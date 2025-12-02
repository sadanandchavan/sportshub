import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bc-dropdowns',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule],
  templateUrl: './bc-dropdowns.component.html',
  styleUrl: './bc-dropdowns.component.css',
})
export class BcDropdownsComponent {
  @ViewChildren(NgbDropdown) dropdowns: QueryList<NgbDropdown>;

  toggleDropdown(dropdown: NgbDropdown) {
    if (dropdown.isOpen()) {
      dropdown.close();
    } else {
      dropdown.open();
    }
  }
}
