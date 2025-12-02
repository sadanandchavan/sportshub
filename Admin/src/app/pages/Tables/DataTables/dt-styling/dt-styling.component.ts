import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { advanceTableData } from '../../../../data/advanceTabledData';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-dt-styling',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
  ],
  templateUrl: './dt-styling.component.html',
  styleUrl: './dt-styling.component.css',
})
export class DtStylingComponent {
  public tableData = [...advanceTableData];
  public tableDataTwo = [...advanceTableData];
  public tableDataThree = [...advanceTableData];
  public tableDataFour = [...advanceTableData];

  searchText1: string = '';
  searchText2: string = '';
  searchText3: string = '';
  searchText4: string = '';

  itemsPerPage1: number = 10;
  itemsPerPage2: number = 10;
  itemsPerPage3: number = 10;
  itemsPerPage4: number = 10;

  entriesOptions: number[] = [10, 25, 50, 100];

  // Current page numbers
  p1: number = 1;
  p2: number = 1;
  p3: number = 1;
  p4: number = 1;

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
