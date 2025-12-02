import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { Customer, CUSTOMERS } from '../../../../data/helpdesk-customer';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  searchText: string = '';
  itemsPerPage: number = 10;
  entriesOptions: number[] = [5,10,15,25];
  p: number = 1; // Page number for pagination
  customers: Customer[] = CUSTOMERS; // Initialize with your data or fetch from a service
  sortColumn: keyof Customer = 'name'; // Default sorting column
  sortDirection: 'asc' | 'desc' = 'asc'; // Default sorting direction

  get filteredCustomers(): Customer[] {
    if (!this.searchText) return this.sortedCustomers;
    return this.sortedCustomers.filter((customer) =>
      Object.values(customer).some((value) =>
        value.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

  get sortedCustomers(): Customer[] {
    const sortedCustomers = [...this.customers];
    sortedCustomers.sort((a, b) => {
      const aValue = a[this.sortColumn];
      const bValue = b[this.sortColumn];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return this.sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        return this.sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      } else {
        return 0;
      }
    });
    return sortedCustomers;
  }

  sortBy(column: keyof Customer): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  // Define the table columns
  columns = [
    { title: 'Name' },
    { title: 'Email' },
    { title: 'Account' },
    { title: 'Last Login' },
  ];

  searchTexts: string = ''; // Search text for JavaScript sourced table
  itemsPerPages: number = 10; // Entries per page
  page: number = 1; // Page number for JavaScript sourced table
  entriesOptionss: number[] = [10, 20, 30, 40, 50]; // Options for entries per page

  // Filtered data based on search text for JavaScript sourced table
  get filteredData() {
    if (!this.searchTexts) {
      return this.customers.map(cust => [
        cust.name,
        cust.email,
        cust.account,
        cust.lastLogin
      ]);
    }
    return this.customers
      .filter(customer =>
        Object.values(customer).some(cell =>
          cell.toString().toLowerCase().includes(this.searchTexts.toLowerCase())
        )
      )
      .map(cust => [
        cust.name,
        cust.email,
        cust.account,
        cust.lastLogin
      ]);
  }

}
