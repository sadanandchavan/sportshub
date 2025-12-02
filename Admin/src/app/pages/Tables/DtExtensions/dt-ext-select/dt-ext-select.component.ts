import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { tableData } from '../../../../data/apitable';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-dt-ext-select',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
  ],
  templateUrl: './dt-ext-select.component.html',
  styleUrl: './dt-ext-select.component.css',
})
export class DtExtSelectComponent {
  public tableData = [...tableData];
  public tableDataTwo = [...tableData];
  public tableDataThree = [...tableData];
  public tableDataFour = [...tableData];

  searchText1: string = '';
  searchText2: string = '';
  searchText3: string = '';
  searchText4: string = '';

  itemsPerPage1: number = 10;
  itemsPerPage2: number = 10;
  itemsPerPage3: number = 10;
  itemsPerPage4: number = 10;

  // Entries per page options
  entriesOptions: number[] = [10, 25, 50, 100];
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
    return this.tableDataThree.filter(
      (row) =>
        row.name.toLowerCase().includes(this.searchText3.toLowerCase()) ||
        row.position.toLowerCase().includes(this.searchText3.toLowerCase()) ||
        row.office.toLowerCase().includes(this.searchText3.toLowerCase())
    );
  }

  selectedRow: any = null; // To keep track of the selected row

  // Method to select a row
  selectRow(data: any) {
    this.selectedRow = data;
  }

  // Method to check if a row is selected
  isSelected(data: any): boolean {
    return this.selectedRow === data;
  }

  selectedCell: { column: string } | null = null; // To keep track of the selected cell

  // Method to select a cell
  selectCell(column: string) {
    this.selectedCell = { column };
  }
}
