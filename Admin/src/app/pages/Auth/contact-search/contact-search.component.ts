import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
interface User {
  name: string;
  username: string;
  image: string;
  isOnline: boolean;
}

@Component({
  selector: 'app-contact-search',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: './contact-search.component.html',
  styleUrl: './contact-search.component.css',
})
export class ContactSearchComponent {
  users: User[] = [
      {
      name: 'William Bond',
      username: '@williambond',
      image: '../assets/images/user/avatar-10.jpg',
      isOnline: true
    },
    {
      name: 'William Bond',
      username: '@janedoe',
      image: '../assets/images/user/avatar-2.jpg',
      isOnline: false
    },
    {
      name: 'William Bond',
      username: '@johnsmith',
      image: '../assets/images/user/avatar-3.jpg',
      isOnline: true
    },
    {
      name: 'William Bond',
      username: '@emilychen',
      image: '../assets/images/user/avatar-4.jpg',
      isOnline: true,
    },
    {
      name: 'William Bond',
      username: '@michaelj',
      image: '../assets/images/user/avatar-5.jpg',
      isOnline: false,
    },
    {
      name: 'William Bond',
      username: '@sophialee',
      image: '../assets/images/user/avatar-6.jpg',
      isOnline: true,
    },
    {
      name: 'William Bond',
      username: '@danielkim',
      image: '../assets/images/user/avatar-7.jpg',
      isOnline: false,
    },
    {
      name: 'William Bond',
      username: '@oliviab',
      image: '../assets/images/user/avatar-8.jpg',
      isOnline: true,
    },
    {
      name: 'William Bond',
      username: '@jamessmith',
      image: '../assets/images/user/avatar-9.jpg',
      isOnline: false,
    },
    {
      name: 'William Bond',
      username: '@sophiadavis',
      image: '../assets/images/user/avatar-10.jpg',
      isOnline: true,
    },
    {
      name: 'William Bond',
      username: '@miawilliams',
      image: '../assets/images/user/avatar-2.jpg',
      isOnline: false,
    },
    {
      name: 'William Bond',
      username: '@ethanbrown',
      image: '../assets/images/user/avatar-3.jpg',
      isOnline: true,
    },
    {
      name: 'William Bond',
      username: '@avajohnson',
      image: '../assets/images/user/avatar-4.jpg',
      isOnline: false,
    },
    {
      name: 'William Bond',
      username: '@liamtaylor',
      image: '../assets/images/user/avatar-5.jpg',
      isOnline: true,
    },
    {
      name: 'William Bond',
      username: '@charlottewilson',
      image: '../assets/images/user/avatar-6.jpg',
      isOnline: false,
    },
    {
      name: 'William Bond',
      username: '@noahlee',
      image: '../assets/images/user/avatar-7.jpg',
      isOnline: true,
    },
    {
      name: 'William Bond',
      username: '@isabellaharris',
      image: '../assets/images/user/avatar-8.jpg',
      isOnline: false,
    },
    {
      name: 'William Bond',
      username: '@isabellaharris',
      image: '../assets/images/user/avatar-9.jpg',
      isOnline: false,
    },
  ];

  // Example of handling button click
  onAccept(user: User) {
    console.log(`Accepted ${user.name}`);
  }

  onDecline(user: User) {
    console.log(`Declined ${user.name}`);
  }
}
