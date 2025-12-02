import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { advanceTableData } from '../../../../data/advanceTabledData';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-dt-plugin',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
  ],
  templateUrl: './dt-plugin.component.html',
  styleUrl: './dt-plugin.component.css',
})
export class DtPluginComponent implements OnInit {
  minAge: number | null = null;
  maxAge: number | null = null;

  public tableData = [...advanceTableData];
  public tableDataTwo = [...advanceTableData];
  public tableDataThree = [...advanceTableData];


  filteredD: any[] = [];

  ngOnInit() {
    // Initialize filtered data with all data
    this.filteredD = this.tableDataThree;
  }

  searchText1: string = '';
  searchText2: string = '';
  searchText3: string = '';

  itemsPerPage1: number = 10;
  itemsPerPage2: number = 10;
  itemsPerPage3: number = 10;

  // Entries per page options
  entriesOptions: number[] = [10, 25, 50, 100];

  // Current page numbers
  p1: number = 1;
  p2: number = 1;
  p3: number = 1;

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

  filterByAge() {
    this.filteredD = this.tableDataThree.filter((item) => {
      const age = item.age; // Adjust according to your data structure

      // Ensure both minAge and maxAge are numbers, else use Infinity bounds
      const min = this.minAge !== null ? this.minAge : -Infinity;
      const max = this.maxAge !== null ? this.maxAge : Infinity;

      return age >= min && age <= max;
    });
  }
}
