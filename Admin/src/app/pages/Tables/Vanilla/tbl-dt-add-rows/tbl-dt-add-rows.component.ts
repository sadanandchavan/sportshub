import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { tableData } from '../../../../data/addrow';

@Component({
  selector: 'app-tbl-dt-add-rows',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
  ],
  templateUrl: './tbl-dt-add-rows.component.html',
  styleUrl: './tbl-dt-add-rows.component.css',
})
export class TblDtAddRowsComponent implements OnInit {
  data = tableData;
  filteredData = this.data;
  searchText = '';
  itemsPerPage = 10; // Default value
  entriesOptions = [10, 25, 50, 100]; // Options for the dropdown
  p: number = 1; // For pagination, default to the first page
  sortField: string = 'name'; // Default sort field
  sortDirection: string = 'asc'; // Default sort direction

  ngOnInit(): void {
    this.filterData();
  }

  addRows(): void {
    // Function to add rows dynamically
    for (let i = 0; i < 1000; i++) {
      this.data.push({
        name: `Name ${this.data.length + 1}`,
        ext: `${Math.floor(Math.random() * 10000)}`,
        city: 'City',
        startDate: '2000/01/01',
        completion: '0%'
      });
    }
    this.filterData(); // Re-filter and sort data after adding new rows
  }

  filterData(): void {
    this.filteredData = this.data.filter(row =>
      row.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      row.ext.toLowerCase().includes(this.searchText.toLowerCase()) ||
      row.city.toLowerCase().includes(this.searchText.toLowerCase()) ||
      row.startDate.toLowerCase().includes(this.searchText.toLowerCase()) ||
      row.completion.toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.sortData(); // Sort the filtered data
  }

  sortData(): void {
    this.filteredData.sort((a, b) => {
      const fieldA = a[this.sortField as keyof typeof a];
      const fieldB = b[this.sortField as keyof typeof b];
      const comparison = fieldA > fieldB ? 1 : fieldA < fieldB ? -1 : 0;
      return this.sortDirection === 'asc' ? comparison : -comparison;
    });
  }

  changeSort(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.filterData(); // Reapply sorting after changing the sort field or direction
  }
}
