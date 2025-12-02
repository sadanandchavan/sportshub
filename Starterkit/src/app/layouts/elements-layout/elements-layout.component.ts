import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SimplebarAngularModule } from 'simplebar-angular';
import { LayoutSettingsService } from '../layout-settings.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-elements-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    RouterModule,
    SimplebarAngularModule,
    FormsModule,
  ],
  templateUrl: './elements-layout.component.html',
  styleUrl: './elements-layout.component.css',
})
export class ElementsLayoutComponent {
  constructor(public settingsService: LayoutSettingsService) {}
  options = { autoHide: true };
  searchQuery: string = '';

  basicComponents = [
    { name: 'Alert', link: '/bc-alert' },
    { name: 'Button', link: '/bc-button' },
    { name: 'Badges', link: '/bc-badges' },
    { name: 'Breadcrumb', link: '/bc-breadcrumb' },
    { name: 'Cards', link: '/bc-card' },
    { name: 'Color', link: '/bc-color' },
    { name: 'Collapse', link: '/bc-collapse' },
    { name: 'Carousel', link: '/bc-carousel' },
    { name: 'Dropdowns', link: '/bc-dropdowns' },
    { name: 'Offcanvas', link: '/bc-offcanvas' },
    { name: 'Pagination', link: '/bc-pagination' },
    { name: 'Progress', link: '/bc-progress' },
    { name: 'List group', link: '/bc-list-group' },
    { name: 'Modal', link: '/bc-modal' },
    { name: 'Spinner', link: '/bc-spinner' },
    { name: 'Tabs & pills', link: '/bc-tabs' },
    { name: 'Tooltip', link: '/bc-tooltip-popover' },
    { name: 'Toasts', link: '/bc-toasts' },
    { name: 'Typography', link: '/bc-typography' },
    { name: 'Other', link: '/bc-extra' },
  ];

  advanceComponents = [
    { name: 'Sweet alert', link: '/ac-alert' },
    { name: 'Datepicker', link: '/ac-datepicker-component' },
    { name: 'Lightbox', link: '/ac-lightbox' },
    { name: 'Modal', link: '/ac-modal' },
    { name: 'Notification', link: '/ac-notification' },
    { name: 'Rangeslider', link: '/ac-rangeslider' },
    { name: 'Slider', link: '/ac-slider' },
    { name: 'Syntax Highlighter', link: '/ac-syntax-highlighter' },
    { name: 'Tour', link: '/ac-tour' },
    { name: 'Tree view', link: '/ac-treeview' },
  ];
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  updateThemeMode(mode: 'light' | 'dark' | 'default'): void {
    this.settingsService.updateSettings({ themeMode: mode });
  }
  filteredBasicComponents = [...this.basicComponents];
  filteredAdvanceComponents = [...this.advanceComponents];

  ngOnInit() {
    // Initial filtering
    this.onSearch();
    this.addClass();
  }

  onSearch() {
    const query = this.searchQuery.toLowerCase();
    this.filteredBasicComponents = this.basicComponents.filter((component) =>
      component.name.toLowerCase().includes(query)
    );
    this.filteredAdvanceComponents = this.advanceComponents.filter(
      (component) => component.name.toLowerCase().includes(query)
    );
  }

  addClass(){
    this.settingsService.updateSettings({ isComponentPage: true });
  }

  ngOnDestroy(){
    this.settingsService.updateSettings({ isComponentPage: false });
  }
}
