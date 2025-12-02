import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { autofillData } from '../../../../data/authofilltable';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dt-ext-col-reorder',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
  ],
  templateUrl: './dt-ext-col-reorder.component.html',
  styleUrl: './dt-ext-col-reorder.component.css',
})
export class DtExtColReorderComponent {
  public tableData = [...autofillData];
  public tableDataTwo = [...autofillData];
  public tableDataThree = [...autofillData];
  public tableDataFour = [...autofillData];

  // Search inputs
  searchText1: string = '';
  searchText2: string = '';
  searchText3: string = '';
  searchText4: string = '';

  // Pagination settings
  itemsPerPage1: number = 10;
  itemsPerPage2: number = 10;
  itemsPerPage3: number = 10;
  itemsPerPage4: number = 10;

  // Entries per page options
  entriesOptions: number[] = [10, 25, 50, 100];

  // Current page numbers
  p1: number = 1;
  p2: number = 1;
  p3: number = 1;
  p4: number = 1;

  // Filtered data based on search
  get filteredData() {
    return this.tableData.filter(
      (row) =>
        row.name.toLowerCase().includes(this.searchText1.toLowerCase()) ||
        row.position.toLowerCase().includes(this.searchText1.toLowerCase()) ||
        row.office.toLowerCase().includes(this.searchText1.toLowerCase())
    );
  }

  get filteredDataTwo() {
    return this.tableDataTwo.filter(
      (row) =>
        row.name.toLowerCase().includes(this.searchText2.toLowerCase()) ||
        row.position.toLowerCase().includes(this.searchText2.toLowerCase()) ||
        row.office.toLowerCase().includes(this.searchText2.toLowerCase())
    );
  }

  get filteredDataThree() {
    return this.tableDataThree.filter(
      (row) =>
        row.name.toLowerCase().includes(this.searchText3.toLowerCase()) ||
        row.position.toLowerCase().includes(this.searchText3.toLowerCase()) ||
        row.office.toLowerCase().includes(this.searchText3.toLowerCase())
    );
  }

  get filteredDataFour() {
    return this.tableDataFour.filter(
      (row) =>
        row.name.toLowerCase().includes(this.searchText4.toLowerCase()) ||
        row.position.toLowerCase().includes(this.searchText4.toLowerCase()) ||
        row.office.toLowerCase().includes(this.searchText4.toLowerCase())
    );
  }
}
