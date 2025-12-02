import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

export interface UserCard {
  coverImage: string;
  avatarImage: string;
  statusBadge: string; 
  name: string;
  username: string;
  posts: number;
  projects: number;
  members: string;
  skills: string[];
  taskCompletion: number;
}

@Component({
  selector: 'app-users-card',
  standalone: true,
  imports: [BreadcrumbComponent,CommonModule],
  templateUrl: './users-card.component.html',
  styleUrl: './users-card.component.css'
})
export class UsersCardComponent {

  userCards: UserCard[] = [
    {
      coverImage: '../assets/images/application/img-user-cover-1.jpg',
      avatarImage: '../assets/images/user/avatar-1.jpg',
      statusBadge: 'bg-success',
      name: 'William Bond',
      username: '@williambond',
      posts: 86,
      projects: 40,
      members: '4.5K',
      skills: ['UX', 'Figma', 'Backend'],
      taskCompletion: 30
    },
    {
      coverImage: '../assets/images/application/img-user-cover-2.jpg',
      avatarImage: '../assets/images/user/avatar-2.jpg',
      statusBadge: 'bg-danger',
      name: 'William Bond',
      username: '@williambond',
      posts: 86,
      projects: 40,
      members: '4.5K',
      skills: ['UX', 'Figma', 'Backend'],
      taskCompletion: 60
    },
    {
      coverImage: '../assets/images/application/img-user-cover-3.jpg',
      avatarImage: '../assets/images/user/avatar-3.jpg',
      statusBadge: 'bg-danger',
      name: 'William Bond',
      username: '@williambond',
      posts: 86,
      projects: 40,
      members: '4.5K',
      skills: ['UX', 'Figma', 'Backend'],
      taskCompletion: 90
    },
    {
      coverImage: '../assets/images/application/img-user-cover-4.jpg',
      avatarImage: '../assets/images/user/avatar-4.jpg',
      statusBadge: 'bg-danger',
      name: 'William Bond',
      username: '@williambond',
      posts: 86,
      projects: 40,
      members: '4.5K',
      skills: ['UX', 'Figma', 'Backend'],
      taskCompletion: 40
    },
    {
      coverImage: '../assets/images/application/img-user-cover-5.jpg',
      avatarImage: '../assets/images/user/avatar-5.jpg',
      statusBadge: 'bg-danger',
      name: 'William Bond',
      username: '@williambond',
      posts: 86,
      projects: 40,
      members: '4.5K',
      skills: ['UX', 'Figma', 'Backend'],
      taskCompletion: 90
    },
    {
      coverImage: '../assets/images/application/img-user-cover-6.jpg',
      avatarImage: '../assets/images/user/avatar-6.jpg',
      statusBadge: 'bg-danger',
      name: 'William Bond',
      username: '@williambond',
      posts: 86,
      projects: 40,
      members: '4.5K',
      skills: ['UX', 'Figma', 'Backend'],
      taskCompletion: 60
    },
    {
      coverImage: '../assets/images/application/img-user-cover-7.jpg',
      avatarImage: '../assets/images/user/avatar-7.jpg',
      statusBadge: 'bg-danger',
      name: 'William Bond',
      username: '@williambond',
      posts: 86,
      projects: 40,
      members: '4.5K',
      skills: ['UX', 'Figma', 'Backend'],
      taskCompletion: 90
    },
    {
      coverImage: '../assets/images/application/img-user-cover-8.jpg',
      avatarImage: '../assets/images/user/avatar-8.jpg',
      statusBadge: 'bg-danger',
      name: 'William Bond',
      username: '@williambond',
      posts: 86,
      projects: 40,
      members: '4.5K',
      skills: ['UX', 'Figma', 'Backend'],
      taskCompletion: 40
    },
    {
      coverImage: '../assets/images/application/img-user-cover-9.jpg',
      avatarImage: '../assets/images/user/avatar-9.jpg',
      statusBadge: 'bg-danger',
      name: 'William Bond',
      username: '@williambond',
      posts: 86,
      projects: 40,
      members: '4.5K',
      skills: ['UX', 'Figma', 'Backend'],
      taskCompletion: 90
    },
  ];

}
