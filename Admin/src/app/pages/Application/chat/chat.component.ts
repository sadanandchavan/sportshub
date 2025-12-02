import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, SimplebarAngularModule, NgbModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  sideNavCollapse = false;
  options = { autoHide: true };

  users = [
    {
      name: 'John Doe',
      avatar: '../assets/images/user/avatar-1.jpg',
      badgeClass: 'bg-success',
      message: 'when meeting schedule',
      timeAgo: '1 week ago',
    },
    {
      name: 'Keefs',
      avatar: '../assets/images/user/avatar-2.jpg',
      badgeClass: 'bg-success bg-opacity-50',
      message: 'when meeting schedule',
      timeAgo: '1 week ago',
    },
    {
      name: 'Lazaro',
      avatar: '../assets/images/user/avatar-3.jpg',
      badgeClass: 'bg-secondary bg-opacity-50',
      message: 'when meeting schedule',
      timeAgo: '1 week ago',
    },
    {
      name: 'Adeline',
      avatar: '../assets/images/user/avatar-3.jpg',
      badgeClass: 'bg-secondary bg-opacity-50',
      message: 'when meeting schedule',
      timeAgo: '1 week ago',
    },
    {
      name: 'Keefs',
      avatar: '../assets/images/user/avatar-2.jpg',
      badgeClass: 'bg-success bg-opacity-50',
      message: 'when meeting schedule',
      timeAgo: '1 week ago',
    },
    {
      name: 'John Doe',
      avatar: '../assets/images/user/avatar-1.jpg',
      badgeClass: 'bg-success',
      message: 'when meeting schedule',
      timeAgo: '1 week ago',
    },
    {
      name: 'Lazaro',
      avatar: '../assets/images/user/avatar-3.jpg',
      badgeClass: 'bg-secondary bg-opacity-50',
      message: 'when meeting schedule',
      timeAgo: '1 week ago',
    },
    {
      name: 'Adeline',
      avatar: '../assets/images/user/avatar-3.jpg',
      badgeClass: 'bg-secondary bg-opacity-50',
      message: 'when meeting schedule',
      timeAgo: '1 week ago',
    },
  ];

  inMessages = [
    {
      "avatar": {
        "src": "../assets/images/user/avatar-3.jpg",
        "badgeClass": "bg-success"
      },
      "username": "Agilulf Fuxg",
      "timestamp": "11:23 AM",
      "options": [
        {
          "icon": "ti ti-dots-vertical",
          "dropdown": [
            { "icon": "ti ti-arrow-back-up", "text": "Reply" },
            { "icon": "ti ti-arrow-forward-up", "text": "Forward" },
            { "icon": "ti ti-copy", "text": "Copy" },
            { "icon": "ti ti-trash", "text": "Delete" }
          ]
        },
        { "icon": "ti ti-edit-circle", "text": "Edit" }
      ],
      "messages": [
        { "content": "Hey.. Bill" },
        { "content": "Nice to meet you!" },
        {
          "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
      ]
    }
  ]

  outMessages = [
    {
      "timestamp": "9h ago",
      "options": [
        {
          "icon": "ti ti-dots-vertical",
          "dropdown": [
            { "icon": "ti ti-arrow-back-up", "text": "Reply" },
            { "icon": "ti ti-arrow-forward-up", "text": "Forward" },
            { "icon": "ti ti-copy", "text": "Copy" },
            { "icon": "ti ti-trash", "text": "Delete" }
          ]
        },
        { "icon": "ti ti-edit-circle", "text": "Edit" }
      ],
      "messages": [
        { "content": "Hi...Henny!!" },
        { "content": "How can I cap you today?" },
        { "content": "Are u listening to me?" },
        { "content": "How can I cap you today?" }
      ]
    }
  ]


}
