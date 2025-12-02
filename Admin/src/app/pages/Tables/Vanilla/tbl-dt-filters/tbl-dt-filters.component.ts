import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-tbl-dt-filters',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
  ],
  templateUrl: './tbl-dt-filters.component.html',
  styleUrl: './tbl-dt-filters.component.css',
})
export class TblDtFiltersComponent implements OnInit {
  searchText: string = ''; // For search input
  itemsPerPage: number = 10; // Default items per page
  entriesOptions: number[] = [5, 10, 20, 50, 100]; // Options for entries per page
  p: number = 1; // Current page number

  data = {
    headings: [
      'Name',
      'Job',
      'Company',
      'Ext.',
      'Start Date',
      'Email',
      'Phone No.',
    ],
    data: [
      [
        'Hedwig F. Nguyen',
        'Manager',
        'Arcu Vel Foundation',
        '9875',
        '03/27/2017',
        'nunc.ullamcorper@metusvitae.com',
        '070 8206 9605',
      ],
      [
        'Genevieve U. Watts',
        'Manager',
        'Eget Incorporated',
        '9557',
        '07/18/2017',
        'Nullam.vitae@egestas.edu',
        '0800 025698',
      ],
      [
        'Kyra S. Baldwin',
        'Manager',
        'Lorem Vitae Limited',
        '3854',
        '04/14/2016',
        'in@elita.org',
        '0800 237 8846',
      ],
      [
        'Stephen V. Hill',
        'Manager',
        'Eget Mollis Institute',
        '8820',
        '03/03/2016',
        'eu@vel.com',
        '0800 682 4591',
      ],
      [
        'Vielka Q. Chapman',
        'Manager',
        'Velit Pellentesque Ultricies Institute',
        '2307',
        '06/25/2017',
        'orci.Donec.nibh@mauriserateget.edu',
        '0800 181 5795',
      ],
      [
        'Ocean W. Curtis',
        'Manager',
        'Eu Ltd',
        '6868',
        '08/24/2017',
        'cursus.et@cursus.edu',
        '(016977) 9585',
      ],
      [
        'Kato F. Tucker',
        'Manager',
        'Vel Lectus Limited',
        '4713',
        '11/06/2017',
        'Duis@Lorem.edu',
        '070 0981 8503',
      ],
      [
        'Robin J. Wise',
        'Manager',
        'Curabitur Dictum PC',
        '3285',
        '02/09/2017',
        'blandit@montesnascetur.edu',
        '0800 259158',
      ],
      [
        'Uriel H. Guerrero',
        'Assistant',
        'Mauris Inc.',
        '2294',
        '02/11/2018',
        'vitae@Innecorci.net',
        '0500 948772',
      ],
      [
        'Yasir W. Benson',
        'Assistant',
        'At Incorporated',
        '3897',
        '01/13/2017',
        'ornare.elit.elit@atortor.edu',
        '0391 916 3600',
      ],
      [
        'Shafira U. French',
        'Assistant',
        'Nisi Magna Incorporated',
        '5116',
        '07/23/2016',
        'metus.In.nec@bibendum.ca',
        '(018013) 26699',
      ],
      [
        'Casey E. Hood',
        'Assistant',
        'Lorem Vitae Odio Consulting',
        '7079',
        '05/05/2017',
        'justo.Praesent@sitamet.ca',
        '0800 570796',
      ],
      [
        'Caleb X. Finch',
        'Assistant',
        'Elit Associates',
        '3629',
        '09/19/2016',
        'condimentum@eleifend.com',
        '056 1551 7431',
      ],
    ],
  };

  filteredPeople: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filteredPeople = this.data.data; // Initialize with all data
  }

  ngOnChanges(): void {
    this.filterData();
  }

  filterData(): void {
    if (this.searchText) {
      this.filteredPeople = this.data.data.filter((row) =>
        row.some((cell) =>
          cell.toLowerCase().includes(this.searchText.toLowerCase())
        )
      );
    } else {
      this.filteredPeople = this.data.data;
    }
  }
}
