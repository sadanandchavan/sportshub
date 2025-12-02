import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { advanceTableData } from '../../../../data/advanceTabledData';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dt-ext-fixed-header',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NgxPaginationModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './dt-ext-fixed-header.component.html',
  styleUrl: './dt-ext-fixed-header.component.css',
})
export class DtExtFixedHeaderComponent {
  public tableData = [...advanceTableData];
  public tableDataTwo = [...advanceTableData];
  public tableDataThree = [...advanceTableData];

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
}
