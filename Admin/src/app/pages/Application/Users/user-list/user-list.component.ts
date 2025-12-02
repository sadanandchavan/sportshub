import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserList, USERLIST } from '../../../../data/application-user-list';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  searchText: string = '';
  itemsPerPage: number = 10;
  entriesOptions: number[] = [5, 10, 15, 25];
  p: number = 1; // Page number for pagination
  users: UserList[] = USERLIST; // Initialize with your data

  // Filtered data based on search text
  get filteredUsers(): UserList[] {
    if (!this.searchText) return this.users;
    return this.users.filter((user) =>
      Object.values(user).some((value) =>
        value.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

  // Paginated data
  get paginatedUsers(): UserList[] {
    const startIndex = (this.p - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, endIndex);
  }

  // Handle page changes
  onPageChange(page: number): void {
    this.p = page;
  }

  // Handle items per page changes
  onItemsPerPageChange(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    this.p = 1; // Reset to the first page when items per page changes
  }

}
