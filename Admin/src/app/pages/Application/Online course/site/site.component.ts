import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { ThemeSectionComponent } from './sections/theme-section/theme-section.component';
import { DomainSectionComponent } from './sections/domain-section/domain-section.component';
import { BioSectionComponent } from './sections/bio-section/bio-section.component';
import { PageSectionComponent } from './sections/page-section/page-section.component';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, ThemeSectionComponent,DomainSectionComponent,BioSectionComponent,PageSectionComponent],
  templateUrl: './site.component.html',
  styleUrl: './site.component.css'
})
export class SiteComponent {

  selectedTab = 1;

  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }

}
