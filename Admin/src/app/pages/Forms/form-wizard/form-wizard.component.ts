import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

export enum Tabs {
  ContactDetail = 1,
  JobDetail,
  EducationDetail,
  Finish
}

@Component({
  selector: 'app-form-wizard',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: './form-wizard.component.html',
  styleUrl: './form-wizard.component.css',
})
export class FormWizardComponent {
  activeTab: Tabs = Tabs.ContactDetail;
  progressBarWidth: string = '0%';
  Tabs = Tabs;

  setActiveTab(tabId: Tabs) {
    this.activeTab = tabId;
    this.updateProgressBar(tabId);
  }

  updateProgressBar(tabId: Tabs): void {
    switch (tabId) {
      case Tabs.JobDetail:
        this.progressBarWidth = '33.333%';
        break;
      case Tabs.EducationDetail:
        this.progressBarWidth = '66.667%';
        break;
      case Tabs.Finish:
        this.progressBarWidth = '100%';
        break;
      default:
        this.progressBarWidth = '0%';
        break;
    }
  }
}
