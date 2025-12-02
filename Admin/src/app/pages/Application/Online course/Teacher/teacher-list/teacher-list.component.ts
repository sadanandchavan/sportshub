import { Component } from '@angular/core';
import { TEACHER, Teacher } from '../../../../../data/online-courses-teacher-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../../../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [BreadcrumbComponent, ReactiveFormsModule, CommonModule, NgxPaginationModule, FormsModule],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent {

  searchText: string = '';
  itemsPerPage: number = 10;
  entriesOptions: number[] = [5, 10, 15, 25];
  p: number = 1; // Page number for pagination
  students: Teacher[] = TEACHER; // Initialize with your data or fetch from a service
  sortColumn: keyof Teacher = 'name'; // Default sorting column
  sortDirection: 'asc' | 'desc' = 'asc'; // Default sorting direction

  // Filter and sort functionality for students
  get filteredStudents(): Teacher[] {
    if (!this.searchText) return this.sortedStudents;
    return this.sortedStudents.filter((student) =>
      Object.values(student).some((value) =>
        value.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

  get sortedStudents(): Teacher[] {
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

  sortBy(column: keyof Teacher): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

}
