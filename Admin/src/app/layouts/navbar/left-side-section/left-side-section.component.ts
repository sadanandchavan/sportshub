import { Component } from '@angular/core';
import { LayoutSettingsService } from '../../layout-settings.service';
import { SidebarService } from '../../../service/sidebar.service';

@Component({
  selector: 'app-left-side-section',
  standalone: true,
  imports: [],
  templateUrl: './left-side-section.component.html',
  styleUrl: './left-side-section.component.css',
})
export class LeftSideSectionComponent {
  constructor(private sidebarService: SidebarService) {}

  // Method to toggle sidebar visibility
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
  toggleSidebarMobile() {
    this.sidebarService.toggleSidebar();
  }
}
