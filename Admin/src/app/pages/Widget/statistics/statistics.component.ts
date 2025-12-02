import { Component, QueryList, ViewChildren } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { NgbDropdown, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, NgbModule, NgbTooltipModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
})
export class StatisticsComponent {
  @ViewChildren(NgbDropdown) dropdowns: QueryList<NgbDropdown>;
  selectedTab: string = 'mon';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  cards = [
    {
      title: 'Online Orders',
      imgSrc: '../assets/images/widget/img-status-1.svg',
      orders: 237,
      totalOrders: '/400',
      percentage: '36%',
      badgeClass: 'bg-light-success ms-2',
      description: 'Delivery Orders',
      progress: 75,
      progressBarClass: 'bg-brand-color-2',
    },
    {
      title: 'Pending Orders',
      imgSrc: '../assets/images/widget/img-status-2.svg',
      orders: 100,
      totalOrders: '/500',
      percentage: '20%',
      badgeClass: 'bg-light-primary ms-2',
      description: 'Delivery Orders',
      progress: 75,
      progressBarClass: 'bg-brand-color-1',
    },
    {
      title: 'Return Orders',
      imgSrc: '../assets/images/widget/img-status-3.svg',
      orders: 50,
      totalOrders: '/400',
      percentage: '10%',
      badgeClass: 'bg-light-danger ms-2',
      description: 'Return Orders',
      progress: 75,
      progressBarClass: 'bg-brand-color-3',
    },
  ];

  toggleDropdown(dropdown: NgbDropdown) {
    if (dropdown.isOpen()) {
      dropdown.close();
    } else {
      dropdown.open();
    }
  }
}
