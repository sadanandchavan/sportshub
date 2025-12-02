import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { autofillData } from '../../../../data/authofilltable';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

interface TableRow {
  name: string;
  position: string;
  office: string;
  age: number; // Adjusted to number
  startDate: string;
  salary: string;
}

@Component({
  selector: 'app-dt-ext-basic-buttons',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
  ],
  templateUrl: './dt-ext-basic-buttons.component.html',
  styleUrls: ['./dt-ext-basic-buttons.component.css'],
})
export class DtExtBasicButtonsComponent {
  public tableData: TableRow[] = [...autofillData];
  public tableDataTwo: TableRow[] = [...autofillData];
  public tableDataThree: TableRow[] = [...autofillData];
  public tableDataFour: TableRow[] = [...autofillData];
  public tableDataFive: TableRow[] = [...autofillData];

  // Search inputs
  searchText1: string = '';
  searchText2: string = '';
  searchText3: string = '';
  searchText4: string = '';
  searchText5: string = '';

  // Pagination properties
  itemsPerPage1: number = 10;
  itemsPerPage2: number = 10;
  itemsPerPage3: number = 10;
  itemsPerPage4: number = 10;
  itemsPerPage5: number = 10;

  // Current page numbers
  p1: number = 1;
  p2: number = 1;
  p3: number = 1;
  p4: number = 1;
  p5: number = 1;

  // Filtered data based on search
  get filteredData() {
    return this.tableData.filter(
      (row: TableRow) =>
        row.name.toLowerCase().includes(this.searchText1.toLowerCase()) ||
        row.position.toLowerCase().includes(this.searchText1.toLowerCase()) ||
        row.office.toLowerCase().includes(this.searchText1.toLowerCase())
    );
  }

  get filteredDataTwo() {
    return this.tableDataTwo.filter(
      (row: TableRow) =>
        row.name.toLowerCase().includes(this.searchText2.toLowerCase()) ||
        row.position.toLowerCase().includes(this.searchText2.toLowerCase()) ||
        row.office.toLowerCase().includes(this.searchText2.toLowerCase())
    );
  }

  get filteredDataThree() {
    return this.tableDataThree.filter(
      (row: TableRow) =>
        row.name.toLowerCase().includes(this.searchText3.toLowerCase()) ||
        row.position.toLowerCase().includes(this.searchText3.toLowerCase()) ||
        row.office.toLowerCase().includes(this.searchText3.toLowerCase())
    );
  }

  get filteredDataFour() {
    return this.tableDataFour.filter(
      (row: TableRow) =>
        row.name.toLowerCase().includes(this.searchText4.toLowerCase()) ||
        row.position.toLowerCase().includes(this.searchText4.toLowerCase()) ||
        row.office.toLowerCase().includes(this.searchText4.toLowerCase())
    );
  }

  get filteredDataFive() {
    return this.tableDataFive.filter(
      (row: TableRow) =>
        row.name.toLowerCase().includes(this.searchText5.toLowerCase()) ||
        row.position.toLowerCase().includes(this.searchText5.toLowerCase()) ||
        row.office.toLowerCase().includes(this.searchText5.toLowerCase())
    );
  }

  showDropdown = false; // Initially hide the dropdown

  onCustomButtonClick() {
    this.showDropdown = !this.showDropdown; // Toggle dropdown visibility
  }
  onWarningButtonClick() {
    alert('Warning Button Activated');
  }

  onDangerButtonClick() {
    alert('Danger Button Activated');
  }

  onInverseButtonClick() {
    alert('Inverse Button Activated');
  }
  onCustomButton1Click() {
    alert('Button1 activated');
  }
  onCustomButton2Click() {
    alert('Button2 activated');
  }

  onDropdownItem1Click() {
    console.log('Dropdown Item 1 Clicked');
    // Add your logic here
  }

  // Method for Dropdown Item 2
  onDropdownItem2Click() {
    console.log('Dropdown Item 2 Clicked');
    // Add your logic here
  }

  // Method for Dropdown Item 3
  onDropdownItem3Click() {
    console.log('Dropdown Item 3 Clicked');
    // Add your logic here
  }
  onAlertButtonClick() {
    alert('Alert Button Clicked');
  }
}
