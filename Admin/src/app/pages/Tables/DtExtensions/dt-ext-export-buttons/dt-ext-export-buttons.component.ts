import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { autofillData } from '../../../../data/authofilltable';
import * as XLSX from 'xlsx'; // For Excel export
interface TableRow {
  name: string;
  position: string;
  office: string;
  age: number; // Adjusted to number
  startDate: string;
  salary: string;
}

@Component({
  selector: 'app-dt-ext-export-buttons',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
  ],
  templateUrl: './dt-ext-export-buttons.component.html',
  styleUrl: './dt-ext-export-buttons.component.css',
})
export class DtExtExportButtonsComponent {
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
  tableElement: HTMLTableElement | null = null;

  ngAfterViewInit() {
    // Initialize tableElement here if needed
    this.tableElement = document.querySelector('table'); // Adjust the selector based on your table's actual selector
  }

  copyTable(): void {
    if (this.tableElement) {
      const range = document.createRange();
      range.selectNode(this.tableElement);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();
      alert('Table copied to clipboard!');
    } else {
      alert('Table element not found!');
    }
  }

  exportCSV(): void {
    if (this.tableElement) {
      const csv = this.tableToCSV(this.tableElement);
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'table-data.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    } else {
      alert('Table element not found!');
    }
  }

  exportExcel(): void {
    if (this.tableElement) {
      const wb = XLSX.utils.table_to_book(this.tableElement);
      const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
      const blob = new Blob([this.s2ab(wbout)], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'table-data.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
    } else {
      alert('Table element not found!');
    }
  }
  copyTable1(): void {
    if (this.tableElement) {
      const range = document.createRange();
      range.selectNode(this.tableElement);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();
      alert('Table copied to clipboard!');
    } else {
      alert('Table element not found!');
    }
  }

  exportCSV1(): void {
    if (this.tableElement) {
      const csv = this.tableToCSV(this.tableElement);
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'table-data.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    } else {
      alert('Table element not found!');
    }
  }

  exportExcel1(): void {
    if (this.tableElement) {
      const wb = XLSX.utils.table_to_book(this.tableElement);
      const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
      const blob = new Blob([this.s2ab(wbout)], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'table-data.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
    } else {
      alert('Table element not found!');
    }
  }
  printTable(): void {
    if (this.tableElement) {
      const printWindow = window.open('', '', 'height=600,width=800');
      printWindow?.document.write('<html><head><title>Print Table</title>');
      printWindow?.document.write('</head><body >');
      printWindow?.document.write(this.tableElement.outerHTML);
      printWindow?.document.write('</body></html>');
      printWindow?.document.close();
      printWindow?.focus();
      printWindow?.print();
    } else {
      alert('Table element not found!');
    }
  }

  private tableToCSV(table: HTMLTableElement): string {
    const rows = Array.from(table.querySelectorAll('tr'));
    return rows
      .map((row) => {
        const cells = Array.from(row.querySelectorAll('td, th'));
        return cells
          .map((cell) => `"${cell.textContent?.replace(/"/g, '""')}"`)
          .join(',');
      })
      .join('\n');
  }

  private s2ab(s: string): ArrayBuffer {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xff;
    }
    return buf;
  }
  downloadButtonJson() {
    const buttonData = {
      id: 'btn1',
      type: 'button',
      text: 'Click Me',
      class: 'btn btn-primary',
      action: 'someActionFunction()',
    };

    const blob = new Blob([JSON.stringify(buttonData, null, 2)], {
      type: 'application/json',
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'button-data.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }
  onDropdownItem1Click() {
    console.log('Dropdown Item 1 Clicked');
  }

  onDropdownItem2Click() {
    console.log('Dropdown Item 2 Clicked');
  }
  onDropdownItem3Click() {
    console.log('Dropdown Item 3 Clicked');
  }
  onDropdownItem4Click() {
    console.log('Dropdown Item 4 Clicked');
  }
  onDropdownItem5Click() {
    console.log('Dropdown Item 5 Clicked');
  }
  onDropdownItem6Click() {
    console.log('Dropdown Item 6 Clicked');
  }
}
