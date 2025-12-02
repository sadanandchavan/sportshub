import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-section.component.html',
  styleUrl: './page-section.component.css'
})
export class PageSectionComponent {

  selectedTab: string = 'school';

  schoolPages = [
    { "title": "Main Page", "url": "/main.page", "state": "Published" },
    { "title": "Login Page", "url": "/login-page.design", "state": "Published" },
    { "title": "Privacy Policy", "url": "/privacy-policy", "state": "Unpublished" },
    { "title": "Main Page", "url": "/main.page", "state": "Published" },
    { "title": "Login Page", "url": "/login-page.design", "state": "Published" },
    { "title": "Privacy Policy", "url": "/privacy-policy", "state": "Unpublished" },
    { "title": "Main Page", "url": "/main.page", "state": "Published" },
    { "title": "Login Page", "url": "/login-page.design", "state": "Published" },
    { "title": "Privacy Policy", "url": "/privacy-policy", "state": "Unpublished" }
  ];

  productPages = [
    { "title": "Privacy Policy", "url": "/privacy-policy", "state": "Unpublished" },
    { "title": "Main Page", "url": "/main.page", "state": "Published" },
    { "title": "Login Page", "url": "/login-page.design", "state": "Published" },
    { "title": "Main Page", "url": "/main.page", "state": "Published" },
    { "title": "Privacy Policy", "url": "/privacy-policy", "state": "Unpublished" },
    { "title": "Login Page", "url": "/login-page.design", "state": "Published" },
    { "title": "Main Page", "url": "/main.page", "state": "Published" },
    { "title": "Privacy Policy", "url": "/privacy-policy", "state": "Unpublished" },
    { "title": "Login Page", "url": "/login-page.design", "state": "Published" }
  ]

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

}
