import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

interface Member {
  name: string;
  mobile: string;
  startDate: string;
  status: string;
  plan: string;
  imageUrl: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  searchText: string = '';
  itemsPerPage: number = 10; // Default value
  entriesOptions: number[] = [5,10,15,25]; // Options for entries per page
  p: number = 1; // Page number for pagination
  sortColumn: keyof Member = 'name'; // Default sorting column
  sortDirection: 'asc' | 'desc' = 'asc'; // Default sorting direction

  members: Member[] = [
    {
      "name": "Airi Satou",
      "mobile": "(123) 4567 890",
      "startDate": "2023/02/07",
      "status": "Active",
      "plan": "Casual",
      "imageUrl": "../assets/images/user/avatar-1.jpg"
    },
    {
      "name": "Ashton Cox",
      "mobile": "(123) 4567 890",
      "startDate": "2023/02/01",
      "status": "Inactive",
      "plan": "Addicted",
      "imageUrl": "../assets/images/user/avatar-2.jpg"
    },
    {
      "name": "Bradley Greer",
      "mobile": "(123) 4567 890",
      "startDate": "2023/01/22",
      "status": "Active",
      "plan": "Diehard",
      "imageUrl": "../assets/images/user/avatar-3.jpg"
    },
    {
      "name": "Brielle Williamson",
      "mobile": "(123) 4567 890",
      "startDate": "2023/02/07",
      "status": "Active",
      "plan": "Casual",
      "imageUrl": "../assets/images/user/avatar-4.jpg"
    },
    {
      "name": "Airi Satou",
      "mobile": "(123) 4567 890",
      "startDate": "2023/02/07",
      "status": "Active",
      "plan": "Casual",
      "imageUrl": "../assets/images/user/avatar-5.jpg"
    },
    {
      "name": "Ashton Cox",
      "mobile": "(123) 4567 890",
      "startDate": "2023/02/01",
      "status": "Inactive",
      "plan": "Addicted",
      "imageUrl": "../assets/images/user/avatar-6.jpg"
    },
    {
      "name": "Bradley Greer",
      "mobile": "(123) 4567 890",
      "startDate": "2023/01/22",
      "status": "Active",
      "plan": "Diehard",
      "imageUrl": "../assets/images/user/avatar-7.jpg"
    },
    {
      "name": "Brielle Williamson",
      "mobile": "(123) 4567 890",
      "startDate": "2023/02/07",
      "status": "Active",
      "plan": "Casual",
      "imageUrl": "../assets/images/user/avatar-8.jpg"
    },
    {
      "name": "Airi Satou",
      "mobile": "(123) 4567 890",
      "startDate": "2023/02/07",
      "status": "Active",
      "plan": "Casual",
      "imageUrl": "../assets/images/user/avatar-9.jpg"
    },
    {
      "name": "Ashton Cox",
      "mobile": "(123) 4567 890",
      "startDate": "2023/02/01",
      "status": "Inactive",
      "plan": "Addicted",
      "imageUrl": "../assets/images/user/avatar-10.jpg"
    },
    {
      "name": "Bradley Greer",
      "mobile": "(123) 4567 890",
      "startDate": "2023/01/22",
      "status": "Active",
      "plan": "Diehard",
      "imageUrl": "../assets/images/user/avatar-4.jpg"
    },
    {
      "name": "Brielle Williamson",
      "mobile": "(123) 4567 890",
      "startDate": "2023/02/07",
      "status": "Active",
      "plan": "Casual",
      "imageUrl": "../assets/images/user/avatar-6.jpg"
    }
  ];

  get filteredMembers(): Member[] {
    if (!this.searchText) return this.sortedMembers;
    return this.sortedMembers.filter((member) =>
      Object.values(member).some((value) =>
        value.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

  get sortedMembers(): Member[] {
    const sortedMembers = [...this.members];
    sortedMembers.sort((a, b) => {
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
    return sortedMembers;
  }

  sortBy(column: keyof Member): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }
}
