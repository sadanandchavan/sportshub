import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../../../../layouts/breadcrumb/breadcrumb.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [BreadcrumbComponent,CommonModule ,NgbTooltipModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {

  currentView: 'sm-view' | 'md-view' | 'large-view' = 'large-view';


  tickets = [
    {
      avatar: '../assets/images/user/avatar-1.jpg',
      number: 1,
      likes: 3,
      title: 'John lui',
      status: 'Replied',
      assigneeAvatar: '../assets/images/admin/p1.jpg',
      assignee: 'Piaf able',
      updatedTime: '22 hours ago',
      comments: 9,
      issue: 'Theme customisation issue',
      lastCommenterAvatar: '../assets/images/user/avatar-5.jpg',
      lastCommenter: 'Robert alia',
      lastComment: 'hello John lui, you need to create "toolbar-options" div only once in a page in your code...',
      detailsUrl: 'helpdesk-ticket-details.html'
    },
    // Add more ticket objects as needed
  ];

  categories = [
    { image: '../assets/images/admin/p1.jpg', name: 'Piaf able', urgent: 1, normal: 3 },
    { image: '../assets/images/admin/p2.jpg', name: 'Pro able', urgent: 0, normal: 3 },
    { image: '../assets/images/admin/p3.jpg', name: 'CRM admin', urgent: 1, normal: 3 },
    // Add more categories as needed
  ];

  agents = [
    { avatar: '../assets/images/user/avatar-5.jpg', name: 'Tom Cook', urgent: 1, normal: 3 },
    { avatar: '../assets/images/user/avatar-4.jpg', name: 'Brad Larry', urgent: 1, normal: 3 },
    { avatar: '../assets/images/user/avatar-3.jpg', name: 'Jhon White', urgent: 0, normal: 3 },
    // Add more agents as needed
  ];

  filterChange(view: 'sm-view' | 'md-view' | 'large-view') {
    this.currentView = view;
  }

  // getViewClass(view: 'sm' | 'md' | 'large'): string {
  //   switch (view) {
  //     case 'sm':
  //       return 'sm-view';
  //     case 'md':
  //       return 'md-view';
  //     case 'large':
  //       return 'large-view';
  //     default:
  //       return '';
  //   }
  // }

}
