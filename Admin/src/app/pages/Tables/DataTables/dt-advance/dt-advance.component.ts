import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { advanceTableData } from '../../../../data/advanceTabledData';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-dt-advance',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
  ],
  templateUrl: './dt-advance.component.html',
  styleUrl: './dt-advance.component.css',
})
export class DtAdvanceComponent {
  public tableData = [...advanceTableData];
  public tableDataTwo = [...advanceTableData];
  public tableDataThree = [...advanceTableData];
  public tableDataFour = [...advanceTableData];
  public tableDataFive = [...advanceTableData];
  public tableDatasix = [...advanceTableData];
  public tableDataSeven = [...advanceTableData];
  public tableDataEight = [...advanceTableData];
  public tableDataNine = [...advanceTableData];
  public tableDataTen = [...advanceTableData];


  searchText1: string = '';
  searchText2: string = '';
  searchText3: string = '';
  searchText4: string = '';
  searchText5: string = '';
  searchText6: string = '';
  searchText7: string = '';
  searchText8: string = '';
  searchText9: string = '';
  searchText10: string = '';

  // Pagination settings
  itemsPerPage1: number = 10;
  itemsPerPage2: number = 10;
  itemsPerPage3: number = 10;
  itemsPerPage4: number = 10;
  itemsPerPage5: number = 10;
  itemsPerPage6: number = 10;
  itemsPerPage7: number = 10;
  itemsPerPage8: number = 10;
  itemsPerPage9: number = 10;
  itemsPerPage10: number = 10;

  // Entries per page options
  entriesOptions: number[] = [10, 25, 50, 100];

  // Current page numbers
  p1: number = 1;
  p2: number = 1;
  p3: number = 1;
  p4: number = 1;
  p5: number = 1;
  p6: number = 1;
  p7: number = 1;
  p8: number = 1;
  p9: number = 1;
  p10: number = 1;

  // Filtered data based on search
  get filteredData() {
    return this.tableData.filter(row =>
      row.name.toLowerCase().includes(this.searchText1.toLowerCase()) ||
      row.position.toLowerCase().includes(this.searchText1.toLowerCase()) ||
      row.office.toLowerCase().includes(this.searchText1.toLowerCase())
    );
  }

  get filteredDataTwo() {
    return this.tableDataTwo.filter(row =>
      row.name.toLowerCase().includes(this.searchText2.toLowerCase()) ||
      row.position.toLowerCase().includes(this.searchText2.toLowerCase()) ||
      row.office.toLowerCase().includes(this.searchText2.toLowerCase())
    );
  }

  get filteredDataThree() {
    return this.tableDataThree.filter(row =>
      row.name.toLowerCase().includes(this.searchText3.toLowerCase()) ||
      row.position.toLowerCase().includes(this.searchText3.toLowerCase()) ||
      row.office.toLowerCase().includes(this.searchText3.toLowerCase())
    );
  }

  get filteredDataFour() {
    return this.tableDataFour.filter(row =>
      row.name.toLowerCase().includes(this.searchText4.toLowerCase()) ||
      row.position.toLowerCase().includes(this.searchText4.toLowerCase()) ||
      row.office.toLowerCase().includes(this.searchText4.toLowerCase())
    );
  }

  get filteredDataFive() {
    return this.tableDataFive.filter(row =>
      row.name.toLowerCase().includes(this.searchText5.toLowerCase()) ||
      row.position.toLowerCase().includes(this.searchText5.toLowerCase()) ||
      row.office.toLowerCase().includes(this.searchText5.toLowerCase())
    );
  }

  get filteredDatasix() {
    return this.tableDatasix.filter(row =>
      row.name.toLowerCase().includes(this.searchText6.toLowerCase()) ||
      row.position.toLowerCase().includes(this.searchText6.toLowerCase()) ||
      row.office.toLowerCase().includes(this.searchText6.toLowerCase())
    );
  }

  get filteredDataSeven() {
    return this.tableDataSeven.filter(row =>
      row.name.toLowerCase().includes(this.searchText7.toLowerCase()) ||
      row.position.toLowerCase().includes(this.searchText7.toLowerCase()) ||
      row.office.toLowerCase().includes(this.searchText7.toLowerCase())
    );
  }

  get filteredDataEight() {
    return this.tableDataEight.filter(row =>
      row.name.toLowerCase().includes(this.searchText8.toLowerCase()) ||
      row.position.toLowerCase().includes(this.searchText8.toLowerCase()) ||
      row.office.toLowerCase().includes(this.searchText8.toLowerCase())
    );
  }

  get filteredDataNine() {
    return this.tableDataNine.filter(row =>
      row.name.toLowerCase().includes(this.searchText9.toLowerCase()) ||
      row.position.toLowerCase().includes(this.searchText9.toLowerCase()) ||
      row.office.toLowerCase().includes(this.searchText9.toLowerCase())
    );
  }

  get filteredDataTen() {
    return this.tableDataTen.filter(row =>
      row.name.toLowerCase().includes(this.searchText10.toLowerCase()) ||
      row.position.toLowerCase().includes(this.searchText10.toLowerCase()) ||
      row.office.toLowerCase().includes(this.searchText10.toLowerCase())
    );
  }

  sortOrder: 'asc' | 'desc' = 'asc';

  sortData() {
    const order = this.sortOrder === 'asc' ? 1 : -1;

    this.tableDataSeven.sort((a, b) => {
      return a.office.localeCompare(b.office) * order;
    });

    // Toggle sort order for next click
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }
}
