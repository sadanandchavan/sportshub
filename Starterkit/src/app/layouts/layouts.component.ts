import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutSettingsService } from './layout-settings.service';
import { LayoutSettings } from '../models/layouts.model';
import { SidebarService } from '../service/sidebar.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
  ],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css',
  providers: [LayoutSettingsService],
})
export class LayoutsComponent {
  settings: any = {
    themeMode: 'light',
    sidebarTheme: 'light',
    accentColor: 'preset-1',
    sidebarCaption: true,
    rtl: false,
    containerWidth: false,
  };
  constructor(
    private settingsService: LayoutSettingsService,
    private sidebarService: SidebarService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.settingsService.settings$.subscribe((settings) => {
      this.settings = settings;
    });
    this.sidebarService.sidebarHidden$.subscribe((hidden) => {
      this.isSidebarHidden = hidden;
    });
  }

  isSidebarHidden = false;
}
