import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../../../../layouts/breadcrumb/breadcrumb.component';
import { DateTime, STUDENTAPPLY, StudentApply } from '../../../../../data/online-courses-student-apply';

@Component({
  selector: 'app-student-apply',
  standalone: true,
  imports: [BreadcrumbComponent, ReactiveFormsModule, CommonModule, NgxPaginationModule, FormsModule],
  templateUrl: './student-apply.component.html',
  styleUrl: './student-apply.component.css'
})
export class StudentApplyComponent {
  searchText: string = '';
  itemsPerPage: number = 10;
  entriesOptions: number[] = [5, 10, 15, 25];
  p: number = 1; // Page number for pagination
  studentsApply: StudentApply[] = STUDENTAPPLY; // Initialize with your data or fetch from a service
  sortColumn: keyof StudentApply = 'name'; // Default sorting column
  sortDirection: 'asc' | 'desc' = 'asc'; // Default sorting direction

  // Filter and sort functionality for student applications
  get filteredStudentsApply(): StudentApply[] {
    if (!this.searchText) return this.sortedStudentsApply;
    return this.sortedStudentsApply.filter((studentApply) =>
      Object.values(studentApply).some((value) =>
        value.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

  get sortedStudentsApply(): StudentApply[] {
    const sortedStudentsApply = [...this.studentsApply];
    sortedStudentsApply.sort((a, b) => {
      const aValue = a[this.sortColumn];
      const bValue = b[this.sortColumn];

      if (this.sortColumn === 'dateTime') {
        const aDateTime = (aValue as DateTime);
        const bDateTime = (bValue as DateTime);

        const aDateTimeString = `${aDateTime.date}T${aDateTime.time}`;
        const bDateTimeString = `${bDateTime.date}T${bDateTime.time}`;

        const aDate = new Date(aDateTimeString).getTime();
        const bDate = new Date(bDateTimeString).getTime();

        return this.sortDirection === 'asc' ? aDate - bDate : bDate - aDate;
      }

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
    return sortedStudentsApply;
  }

  sortBy(column: keyof StudentApply): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

}
