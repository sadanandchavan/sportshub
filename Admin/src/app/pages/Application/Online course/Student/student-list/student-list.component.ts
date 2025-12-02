import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../../layouts/breadcrumb/breadcrumb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CUSTOMERS } from '../../../../../data/helpdesk-customer';
import { NgxPaginationModule } from 'ngx-pagination';
import { Student, STUDENT } from '../../../../../data/online-courses-student-list';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [BreadcrumbComponent, ReactiveFormsModule, CommonModule, NgxPaginationModule,FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  searchText: string = '';
  itemsPerPage: number = 10;
  entriesOptions: number[] = [5, 10, 15, 25];
  p: number = 1; // Page number for pagination
  students: Student[] = STUDENT; // Initialize with your data or fetch from a service
  sortColumn: keyof Student = 'name'; // Default sorting column
  sortDirection: 'asc' | 'desc' = 'asc'; // Default sorting direction

  // Filter and sort functionality for students
  get filteredStudents(): Student[] {
    if (!this.searchText) return this.sortedStudents;
    return this.sortedStudents.filter((student) =>
      Object.values(student).some((value) =>
        value.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

  get sortedStudents(): Student[] {
    const sortedStudents = [...this.students];
    sortedStudents.sort((a, b) => {
      const aValue = a[this.sortColumn];
      const bValue = b[this.sortColumn];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return this.sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        return this.sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      } else {
        return 0;
      }
    });
    return sortedStudents;
  }

  sortBy(column: keyof Student): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

}
