import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
interface TableRow {
  select: string;
  customer: string;
  version: string;
  plannedUpgrade: string;
  dbInfo: string;
  websiteInfo: string;
}

@Component({
  selector: 'app-tbl-dt-methods',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, NgxPaginationModule, FormsModule],
  templateUrl: './tbl-dt-methods.component.html',
  styleUrl: './tbl-dt-methods.component.css',
})
export class TblDtMethodsComponent {
  p: number = 1; // Initialize the current page to 1
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
   searchText: string = '';
  itemsPerPage: number = 5;
  entriesOptions: number[] = [5, 10, 15, 20];

  columns = [
    { name: 'Select', visible: true },
    { name: 'Customer', visible: true },
    { name: 'Version', visible: true },
    { name: 'Planned upgrade', visible: true },
    { name: 'DB-Info', visible: true },
    { name: 'Website info', visible: true }
  ];

  tableData: TableRow[] = [
    { select: '', customer: 'Test one <br>CCode: 33123', version: '7.1.5', plannedUpgrade: '26.11.2018', dbInfo: 'Server: s1 <br>DB: db1', websiteInfo: 'Websitename: Red <br>Node: 10' },
    { select: '', customer: 'Test two <br>CCode: 12353', version: '7.1.5.2', plannedUpgrade: '26.11.2019', dbInfo: 'Server: s1 <br>DB: db2', websiteInfo: 'Websitename: Green <br>Node: 6' },
    { select: '', customer: 'Test three <br>CCode: 33522', version: '7.1.6', plannedUpgrade: '01.01.2020', dbInfo: 'Server: s2 <br>DB: db1', websiteInfo: 'Websitename: Orange <br>Node: 5' },
    { select: '', customer: 'Test four <br>CCode: 25512', version: '7.1.7', plannedUpgrade: '26.03.2021', dbInfo: 'Server: s1 <br>DB: db3', websiteInfo: 'Websitename: Blue <br>Node: 10' }
  ];

  get sortedData(): TableRow[] {
    const data = [...this.tableData];
    if (this.sortColumn) {
      data.sort((a, b) => this.compareValues(a, b, this.sortColumn));
      if (this.sortDirection === 'desc') {
        data.reverse();
      }
    }
    // Filter data based on searchText
    return data.filter(row =>
      Object.values(row).some(value =>
        value.toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

  compareValues(a: TableRow, b: TableRow, column: string): number {
    const aValue = a[column as keyof TableRow] as string;
    const bValue = b[column as keyof TableRow] as string;
    if (!isNaN(Date.parse(aValue)) && !isNaN(Date.parse(bValue))) {
      return new Date(aValue).getTime() - new Date(bValue).getTime();
    } else if (!isNaN(parseFloat(aValue)) && !isNaN(parseFloat(bValue))) {
      return parseFloat(aValue) - parseFloat(bValue);
    } else {
      return aValue.localeCompare(bValue);
    }
  }

  toggleColumnVisibility(index: number) {
    this.columns[index].visible = !this.columns[index].visible;
  }

  importData(data: string) {
    try {
      // Try to parse as JSON
      const parsedData = JSON.parse(data);
      if (Array.isArray(parsedData)) {
        this.tableData = [...this.tableData, ...parsedData];
      }
    } catch {
      // Parse as CSV
      const rows = data.split('\n').filter(row => row.trim() !== '');
      const newData = rows.map(row => {
        const columns = row.split(',');
        return {
          select: '',
          customer: columns[0] || '',
          version: columns[1] || '',
          plannedUpgrade: columns[2] || '',
          dbInfo: columns[3] || '',
          websiteInfo: columns[4] || ''
        };
      });
      this.tableData = [...this.tableData, ...newData];
    }
  }

  exportData(format: string) {
    let dataStr = '';
    if (format === 'csv') {
      dataStr = this.exportToCSV();
    } else if (format === 'json') {
      dataStr = this.exportToJSON();
    } else if (format === 'sql') {
      dataStr = this.exportToSQL();
    }
    this.downloadFile(dataStr, format);
  }

  exportToCSV(): string {
    const headers = this.columns.filter(col => col.visible).map(col => col.name).join(',');
    const rows = this.sortedData.map(row => {
      return [
        row.select,
        row.customer,
        row.version,
        row.plannedUpgrade,
        row.dbInfo,
        row.websiteInfo
      ].filter((_, index) => this.columns[index].visible).join(',');
    }).join('\n');
    return `${headers}\n${rows}`;
  }

  exportToJSON(): string {
    const visibleColumns = this.columns.map((col, index) => col.visible ? index : -1).filter(index => index !== -1);
    const filteredData = this.sortedData.map(row => {
      const filteredRow: Partial<TableRow> = {};
      visibleColumns.forEach(index => {
        const key = this.columns[index].name.toLowerCase().replace(/ /g, '') as keyof TableRow;
        filteredRow[key] = row[key];
      });
      return filteredRow;
    });
    return JSON.stringify(filteredData, null, 2);
  }

  exportToSQL(): string {
    const visibleColumns = this.columns.map((col, index) => col.visible ? col.name.toLowerCase().replace(/ /g, '_') : null).filter(col => col !== null);
    const rows = this.sortedData.map(row => {
      return `(${[
        row.select,
        row.customer,
        row.version,
        row.plannedUpgrade,
        row.dbInfo,
        row.websiteInfo
      ].filter((_, index) => this.columns[index].visible).map(val => `'${val.replace(/'/g, "''")}'`).join(', ')})`;
    }).join(',\n');
    return `INSERT INTO table_name (${visibleColumns.join(', ')}) VALUES \n${rows};`;
  }

  downloadFile(dataStr: string, format: string) {
    const blob = new Blob([dataStr], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `data.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  sortTable(columnName: string) {
    if (this.sortColumn === columnName) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = columnName;
      this.sortDirection = 'asc';
    }
  }
}
