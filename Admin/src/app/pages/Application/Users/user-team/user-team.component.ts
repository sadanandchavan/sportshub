import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-team',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    NgbTooltipModule,
  ],
  templateUrl: './user-team.component.html',
  styleUrl: './user-team.component.css',
})
export class UserTeamComponent {
  searchText1: string = ''; // For the search input field
  itemsPerPage1: number = 10; // Default value for entries per page
  entriesOptions: number[] = [10, 20, 30, 40]; // Options for entries per page

  // Ensure `page` is declared only once
  page: number = 1; // Current page for pagination

  // Define other properties
  itemsPerPage: number = 3; // Default items per page for pagination
  data = [
    {
      name: 'Design',
      email: 'Carson_Darrin@domain.com',
      organization: 'SR.Pvt.Ltd',
      orgLink: '#',
      leaderImg: '../assets/images/user/avatar-2.jpg',
      leaderName: 'Carson Darrin',
      members: [
        { img: '../assets/images/user/avatar-4.jpg', name: 'John Doe' },
        { img: '../assets/images/user/avatar-6.jpg', name: 'Keefs' },
        { img: '../assets/images/user/avatar-7.jpg', name: 'Lazaro' },
        { img: '../assets/images/user/avatar-8.jpg', name: 'Adeline' },
      ],
      extraMembers: '+1',
      location: 'India',
      iconClass: 'avtar avtar-s btn-light-primary',
      icon: 'ph-duotone ph-paint-brush f-18',
      iconBg: 'light-primary',
    },
    {
      name: 'Management',
      email: 'John_Doe@domain.com',
      organization: 'SMT.Pvt.Ltd',
      orgLink: '#',
      leaderImg: '../assets/images/user/avatar-8.jpg',
      leaderName: 'John Doe',
      members: [
        { img: '../assets/images/user/avatar-1.jpg', name: 'Carson Darrin' },
        { img: '../assets/images/user/avatar-5.jpg', name: 'Lazaro' },
        { img: '../assets/images/user/avatar-3.jpg', name: 'Adeline' },
        { img: '../assets/images/user/avatar-4.jpg', name: 'Keefs' },
      ],
      extraMembers: '+5',
      location: 'Indonesia',
      iconClass: 'avtar avtar-s btn-light-success',
      icon: 'ph-duotone ph-buildings f-18',
      iconBg: 'light-success',
    },
    {
      name: 'Production',
      email: 'Adeline@domain.com',
      organization: 'JCBK.Pvt.Ltd',
      orgLink: '#',
      leaderImg: '../assets/images/user/avatar-3.jpg',
      leaderName: 'Adeline',
      members: [
        { img: '../assets/images/user/avatar-6.jpg', name: 'Keefs' },
        { img: '../assets/images/user/avatar-4.jpg', name: 'John Doe' },
        { img: '../assets/images/user/avatar-1.jpg', name: 'Carson Darrin' },
        { img: '../assets/images/user/avatar-7.jpg', name: 'Lazaro' },
      ],
      extraMembers: '',
      location: 'Malaysia',
      iconClass: 'avtar avtar-s btn-light-warning',
      icon: 'ph-duotone ph-devices f-18',
      iconBg: 'light-warning',
    },
    {
      name: 'Marketing',
      email: 'marketing@domain.com',
      organization: 'XYZ.Pvt.Ltd',
      orgLink: '#',
      leaderImg: '../assets/images/user/avatar-5.jpg',
      leaderName: 'Alex Johnson',
      members: [
        { img: '../assets/images/user/avatar-2.jpg', name: 'Sara Lee' },
        { img: '../assets/images/user/avatar-6.jpg', name: 'Michael Brown' },
        { img: '../assets/images/user/avatar-7.jpg', name: 'Emily Davis' },
      ],
      extraMembers: '+3',
      location: 'United States',
      iconClass: 'avtar avtar-s btn-light-danger',
      icon: 'ph-duotone ph-gear-fine f-18',
      iconBg: 'light-danger',
    },
    {
      name: 'Support',
      email: 'support@domain.com',
      organization: 'ABCD.Pvt.Ltd',
      orgLink: '#',
      leaderImg: '../assets/images/user/avatar-4.jpg',
      leaderName: 'Linda Carter',
      members: [
        { img: '../assets/images/user/avatar-8.jpg', name: 'Paul Walker' },
        { img: '../assets/images/user/avatar-1.jpg', name: 'Sophia Brown' },
      ],
      extraMembers: '+2',
      location: 'Canada',
      iconClass: 'avtar avtar-s btn-light-info',
      icon: 'ph-duotone ph-paint-brush f-18',
      iconBg: 'light-info',
    },
    {
      name: 'Management',
      email: 'John_Doe@domain.com',
      organization: 'SMT.Pvt.Ltd',
      orgLink: '#',
      leaderImg: '../assets/images/user/avatar-8.jpg',
      leaderName: 'John Doe',
      members: [
        { img: '../assets/images/user/avatar-1.jpg', name: 'Carson Darrin' },
        { img: '../assets/images/user/avatar-5.jpg', name: 'Lazaro' },
        { img: '../assets/images/user/avatar-3.jpg', name: 'Adeline' },
        { img: '../assets/images/user/avatar-4.jpg', name: 'Keefs' },
      ],
      extraMembers: '+5',
      location: 'Indonesia',
      iconClass: 'avtar avtar-s btn-light-success',
      icon: 'ph-duotone ph-buildings f-18',
      iconBg: 'light-success',
    },
    {
      name: 'Production',
      email: 'Adeline@domain.com',
      organization: 'JCBK.Pvt.Ltd',
      orgLink: '#',
      leaderImg: '../assets/images/user/avatar-3.jpg',
      leaderName: 'Adeline',
      members: [
        { img: '../assets/images/user/avatar-6.jpg', name: 'Keefs' },
        { img: '../assets/images/user/avatar-4.jpg', name: 'John Doe' },
        { img: '../assets/images/user/avatar-1.jpg', name: 'Carson Darrin' },
        { img: '../assets/images/user/avatar-7.jpg', name: 'Lazaro' },
      ],
      extraMembers: '',
      location: 'Malaysia',
      iconClass: 'avtar avtar-s btn-light-warning',
      icon: 'ph-duotone ph-devices f-18',
      iconBg: 'light-warning',
    },
    {
      name: 'Design',
      email: 'Carson_Darrin@domain.com',
      organization: 'SR.Pvt.Ltd',
      orgLink: '#',
      leaderImg: '../assets/images/user/avatar-2.jpg',
      leaderName: 'Carson Darrin',
      members: [
        { img: '../assets/images/user/avatar-4.jpg', name: 'John Doe' },
        { img: '../assets/images/user/avatar-6.jpg', name: 'Keefs' },
        { img: '../assets/images/user/avatar-7.jpg', name: 'Lazaro' },
        { img: '../assets/images/user/avatar-8.jpg', name: 'Adeline' },
      ],
      extraMembers: '+1',
      location: 'India',
      iconClass: 'avtar avtar-s btn-light-primary',
      icon: 'ph-duotone ph-paint-brush f-18',
      iconBg: 'light-primary',
    },
  ];
}
