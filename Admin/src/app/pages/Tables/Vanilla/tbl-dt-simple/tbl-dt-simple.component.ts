import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { PEOPLE } from '../../../../data/table';
import { Person } from '../../../../models/person.model';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tbl-dt-simple',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, NgxPaginationModule, FormsModule],
  templateUrl: './tbl-dt-simple.component.html',
  styleUrl: './tbl-dt-simple.component.css',
})
export class TblDtSimpleComponent implements OnInit {
  people: Person[] = PEOPLE;

  constructor() {}

  ngOnInit(): void {}
  searchText: string = ''; // For search input
  itemsPerPage: number = 10; // Default entries per page
  p: number = 1; // Current page number

  // Entries per page options
  entriesOptions: number[] = [10, 20, 30, 50];

  // Getter to filter people based on search text
  get filteredPeople() {
    return this.people.filter(
      (person) =>
        person.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        person.ext.includes(this.searchText) ||
        person.city.toLowerCase().includes(this.searchText.toLowerCase()) ||
        person.startDate.includes(this.searchText) ||
        person.completion.includes(this.searchText)
    );
  }
}
