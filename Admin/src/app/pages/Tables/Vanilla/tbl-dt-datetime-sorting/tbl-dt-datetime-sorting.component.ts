import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tableData } from '../../../../data/shortingtable';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-tbl-dt-datetime-sorting',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
  ],
  templateUrl: './tbl-dt-datetime-sorting.component.html',
  styleUrl: './tbl-dt-datetime-sorting.component.css',
})
export class TblDtDatetimeSortingComponent implements OnInit {
  data = tableData;
  filteredPeople = [...this.data];
  itemsPerPage = 10;
  p = 1;
  searchText = '';
  sortField: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  // Define the entriesOptions property
  entriesOptions = [10, 25, 50, 100];

  constructor() {}

  ngOnInit(): void {
    this.updateFilteredPeople();
  }

  sort(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.updateFilteredPeople();
  }

  updateFilteredPeople(): void {
    this.filteredPeople = this.data.filter(row =>
      (row.iso8601?.includes(this.searchText) || '') ||
      (row.mysql?.includes(this.searchText) || '') ||
      (row.rfc2822?.includes(this.searchText) || '') ||
      (row.mmmDdYyyy?.includes(this.searchText) || '') ||
      (row.ddMmYyyy?.includes(this.searchText) || '') ||
      (row.mmDdYy?.includes(this.searchText) || '') ||
      (row.unix?.includes(this.searchText) || '')
    );

    if (this.sortField) {
      this.filteredPeople.sort((a, b) => {
        const aValue = a[this.sortField as keyof typeof a] as string;
        const bValue = b[this.sortField as keyof typeof b] as string;

        if (aValue === bValue) return 0;

        const compare = (aValue > bValue ? 1 : -1);
        return this.sortDirection === 'asc' ? compare : -compare;
      });
    }
  }
}
