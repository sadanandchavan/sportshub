import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { tableData } from '../../../../data/basic-scroller-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-dt-ext-scroller',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NgxPaginationModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './dt-ext-scroller.component.html',
  styleUrl: './dt-ext-scroller.component.css',
})
export class DtExtScrollerComponent implements OnInit {
  tableData = tableData.aaData;

  // First Table
  searchText1: string = '';
  currentPage1: number = 1;
  itemsPerPage1: number = 10; // Set to 5 to display 5 items per page by default

  // Second Table
  searchText2: string = '';
  currentPage2: number = 1;
  itemsPerPage2: number = 10; // Set to 5 to display 5 items per page by default

  searchText3: string = '';
  itemsPerPage3: number = 10; // Default number of items per page
  currentPage3: number = 1;

  entriesOptions: number[] = [5, 10, 15, 20]; // Provide options for items per page

  constructor() {}

  ngOnInit(): void {}

  // Filtered data for the first table based on search text
  get filteredData1() {
    if (!this.searchText1) {
      return this.tableData;
    }
    return this.tableData.filter((row: string[]) =>
      row.some((field) =>
        field.toLowerCase().includes(this.searchText1.toLowerCase())
      )
    );
  }

  // Filtered data for the second table based on search text
  get filteredData2() {
    if (!this.searchText2) {
      return this.tableData;
    }
    return this.tableData.filter((row: string[]) =>
      row.some((field) =>
        field.toLowerCase().includes(this.searchText2.toLowerCase())
      )
    );
  }

  get filteredData3() {
    if (!this.searchText3) {
      return this.tableData;
    }
    return this.tableData.filter((row: string[]) =>
      row.some((field) =>
        field.toLowerCase().includes(this.searchText3.toLowerCase())
      )
    );
  }
}
