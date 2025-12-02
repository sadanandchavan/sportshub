import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { tableData } from '../../../../data/export';
import { CommonModule } from '@angular/common';
import FileSaver from 'file-saver';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-tbl-dt-export',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
  ],
  templateUrl: './tbl-dt-export.component.html',
  styleUrl: './tbl-dt-export.component.css',
})
export class TblDtExportComponent implements OnInit {
  data = tableData;
  headings: string[] = [];
  rows: string[][] = [];

  searchText: string = ''; // Added property for search text
  itemsPerPage: number = 10; // Added property for items per page
  entriesOptions: number[] = [10, 25, 50, 100]; // Added options for entries per page
  p: number = 1; // Added property for pagination

  filteredPeople: any[] = []; // Added property for filtered data

  ngOnInit(): void {
    this.headings = this.data.headings;
    this.rows = this.data.rows;
    this.filteredPeople = this.rows; // Initialize with all data
  }

  ngOnChanges(): void {
    this.filterData();
  }

  filterData(): void {
    // Assuming rows is an array of objects; adjust the filtering logic as needed
    this.filteredPeople = this.rows.filter((row) =>
      row.some((cell) =>
        cell.toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

  exportCSV(): void {
    const csvContent = this.generateCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    FileSaver.saveAs(blob, 'data.csv');
  }

  exportSQL(): void {
    const sqlContent = this.generateSQL();
    const blob = new Blob([sqlContent], { type: 'text/plain;charset=utf-8;' });
    FileSaver.saveAs(blob, 'data.sql');
  }

  exportTXT(): void {
    const txtContent = this.generateTXT();
    const blob = new Blob([txtContent], { type: 'text/plain;charset=utf-8;' });
    FileSaver.saveAs(blob, 'data.txt');
  }

  exportJSON(): void {
    const jsonContent = JSON.stringify(this.rows, null, 2);
    const blob = new Blob([jsonContent], {
      type: 'application/json;charset=utf-8;',
    });
    FileSaver.saveAs(blob, 'data.json');
  }

  private generateCSV(): string {
    const header = this.headings.join(',');
    const rows = this.rows.map((row) => row.join(',')).join('\n');
    return `${header}\n${rows}`;
  }

  private generateSQL(): string {
    let sql = 'INSERT INTO table_name (';
    sql += this.headings.join(', ') + ') VALUES\n';
    sql += this.rows
      .map((row) => `(${row.map((cell: string) => `'${cell}'`).join(', ')})`)
      .join(',\n');
    sql += ';';
    return sql;
  }

  private generateTXT(): string {
    const header = this.headings.join(' | ');
    const rows = this.rows.map((row) => row.join(' | ')).join('\n');
    return `${header}\n${rows}`;
  }
}
