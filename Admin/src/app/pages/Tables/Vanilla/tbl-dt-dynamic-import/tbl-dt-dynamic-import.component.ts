import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-tbl-dt-dynamic-import',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
  ],
  templateUrl: './tbl-dt-dynamic-import.component.html',
  styleUrl: './tbl-dt-dynamic-import.component.css',
})
export class TblDtDynamicImportComponent implements OnInit {
  tableData: any[] = [];
  searchText: string = '';
  itemsPerPage: number = 10;
  entriesOptions: number[] = [5, 10, 20, 50];
  p: number = 1; // Page number for pagination

  sortField: string = ''; // Current field to sort by
  sortDirection: 'asc' | 'desc' = 'asc'; // Sort direction

  data = `Name,Ext.,City,Start Date|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07|Hammett Gordon,8101,Wah,1998/06/09|Kyra Moses,3796,Quenast,1998/07/07|Kelly Cameron,4836,Fontaine-Valmont,1999/02/07|Theodore Duran,8971,Dhanbad,1999/04/07`;

  ngOnInit(): void {
    this.tableData = this.parseData(this.data);
  }

  parseData(data: string): any[] {
    const [headers, ...rows] = data.split('|').map(row => row.split(','));
    return rows.map(row => {
      return headers.reduce((acc: any, header: string, index: number) => {
        acc[header.trim()] = row[index]?.trim() || '';
        return acc;
      }, {});
    });
  }

  getObjectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  get filteredPeople() {
    // Filter based on search text
    const filtered = this.tableData.filter(person =>
      Object.values(person).some(value =>
        (value as string).toLowerCase().includes(this.searchText.toLowerCase())
      )
    );

    // Sort based on sort field and direction
    return filtered.sort((a, b) => {
      if (this.sortField) {
        const valueA = a[this.sortField];
        const valueB = b[this.sortField];

        if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
        if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      }
      return 0;
    });
  }

  onSort(field: string) {
    if (this.sortField === field) {
      // Toggle sort direction if already sorted by this field
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Set the new sort field and default direction
      this.sortField = field;
      this.sortDirection = 'asc';
    }
  }
}
