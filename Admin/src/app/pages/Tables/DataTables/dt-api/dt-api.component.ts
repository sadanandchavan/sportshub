import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { advanceTableData } from '../../../../data/advanceTabledData';
import { NgxPaginationModule } from 'ngx-pagination';

interface TableRow {
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
}

@Component({
  selector: 'app-dt-api',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    
  ],
  templateUrl: './dt-api.component.html',
  styleUrl: './dt-api.component.css',
})
export class DtApiComponent {
  public tableDataTwo = [...advanceTableData];
  public tableDataThree = [...advanceTableData];
  public tableDataFour = [...advanceTableData];
  tableData: TableRow[] = [
    {
      column1: 'Data 1',
      column2: 'Data 2',
      column3: 'Data 3',
      column4: 'Data 4',
      column5: 'Data 5',
    },
  ];

  addRow() {
    // Define new row with default or empty values
    const newRow: TableRow = {
      column1: 'New Data 1',
      column2: 'New Data 2',
      column3: 'New Data 3',
      column4: 'New Data 4',
      column5: 'New Data 5',
    };

    this.tableData.push(newRow);
  }
  p1: number = 1;

  search = {
    name: '',
    position: '',
    office: '',
    age: '',
    startDate: '',
    salary: ''
  };
}
