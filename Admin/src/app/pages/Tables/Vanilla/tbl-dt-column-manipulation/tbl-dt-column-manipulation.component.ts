import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-tbl-dt-column-manipulation',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
  ],
  templateUrl: './tbl-dt-column-manipulation.component.html',
  styleUrl: './tbl-dt-column-manipulation.component.css',
})
export class TblDtColumnManipulationComponent implements OnInit {
  tableData: any[] = [];
  data = `Name,Ext.,City,Start Date|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07`;

  searchText: string = '';
  itemsPerPage: number = 10;
  entriesOptions: number[] = [10, 25, 50, 100];
  p: number = 1; // For pagination control
  sortField: string = 'Name'; // Default sorting field
  sortDirection: string = 'asc'; // Default sorting direction

  ngOnInit(): void {
    this.tableData = this.parseData(this.data);
    this.sortData(); // Initial sort
  }

  parseData(data: string): any[] {
    const rows = data.split('|');
    const headers = rows[0].split(',');
    const dataRows = rows.slice(1);

    return dataRows.map((row) => {
      const values = row.split(',');
      let rowData: any = {};
      headers.forEach((header, index) => {
        rowData[header.trim()] = values[index] || '';
      });
      return rowData;
    });
  }

  sortData(field: string = this.sortField): void {
    this.sortField = field;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.tableData.sort((a, b) => {
      if (a[field] < b[field]) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (a[field] > b[field]) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  onButtonClick(index: number): void {
    const row = this.tableData[index];
    const rowIndex = index + 1;
    const renderedRows = this.itemsPerPage;
    const totalRows = this.tableData.length;

    const messageParts: (string | number)[] = [
      'This is row ',
      rowIndex,
      ' of ',
      renderedRows,
      ' rendered rows and row ',
      rowIndex,
      ' of ',
      totalRows,
      ' total rows.'
    ];

    const data = Object.values(row);
    const message = `${messageParts.join('')}\n\nThe row data is:\n${JSON.stringify(data)}`;

    alert(message);
  }
}
