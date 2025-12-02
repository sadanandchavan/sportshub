import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { Employee, tableData } from '../../../../data/tabledata';
import { CommonModule } from '@angular/common';
import { tableDataTwo } from '../../../../data/tabledataTwo';

@Component({
  selector: 'app-dt-ext-fixed-columns',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: './dt-ext-fixed-columns.component.html',
  styleUrl: './dt-ext-fixed-columns.component.css'
})
export class DtExtFixedColumnsComponent implements OnInit {
  employees: Employee[] = [];
  tableData: Employee[] = [];
  sortColumn: keyof Employee = 'firstName';
  sortDirection: 'asc' | 'desc' = 'asc';

  ngOnInit(): void {
    // Initialize employees and tableData with your data
    this.employees = tableData;
    this.tableData = tableDataTwo;
  }

  sortData(column: keyof Employee): void {
    this.sortColumn = column;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.tableData.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
}
