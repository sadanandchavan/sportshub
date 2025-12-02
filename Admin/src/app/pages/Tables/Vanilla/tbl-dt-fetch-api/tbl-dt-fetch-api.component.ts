import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { data } from '../../../../data/apidata';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
interface TableRow {
  Name: string;
  Ext: string;
  City: string;
  StartDate: string;
}

@Component({
  selector: 'app-tbl-dt-fetch-api',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
  ],
  templateUrl: './tbl-dt-fetch-api.component.html',
  styleUrl: './tbl-dt-fetch-api.component.css',
})
export class TblDtFetchApiComponent implements OnInit {
 tableData: TableRow[] = data;
  filteredData: TableRow[] = data; // Data for display with filtering and sorting
  searchText: string = '';
  itemsPerPage: number = 10; // Default value, adjust as needed
  entriesOptions: number[] = [10, 20, 30, 50]; // Options for entries per page
  p: number = 1; // Pagination page
  sortField: keyof TableRow = 'Name'; // Default sort field
  sortOrder: 'asc' | 'desc' = 'asc'; // Default sort order

  constructor() { }

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let data = [...this.tableData];

    // Search filter
    if (this.searchText) {
      data = data.filter(item =>
        Object.values(item).some(val =>
          val.toString().toLowerCase().includes(this.searchText.toLowerCase())
        )
      );
    }

    // Sort data
    data.sort((a, b) => {
      const aVal = a[this.sortField].toString().toLowerCase();
      const bVal = b[this.sortField].toString().toLowerCase();

      if (aVal < bVal) return this.sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return this.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    // Update filtered data
    this.filteredData = data;
  }

  onSortChange(field: keyof TableRow): void {
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortOrder = 'asc';
    }
    this.applyFilters();
  }
}
