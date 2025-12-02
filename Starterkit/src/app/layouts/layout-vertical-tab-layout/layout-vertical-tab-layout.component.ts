import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { LayoutSettingsService } from '../layout-settings.service';

@Component({
  selector: 'app-layout-vertical-tab-layout',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout-vertical-tab-layout.component.html',
  styleUrl: './layout-vertical-tab-layout.component.css',
})
export class LayoutVerticalTabLayoutComponent {

  constructor(public settingsService: LayoutSettingsService){}

  ngOnInit(){
    this.updateThemeMode('layout-3');
  }

  updateThemeMode(value){
    this.settingsService.updateSettings({ layoutChange: value });
  }

  ngOnDestroy(){
    this.settingsService.updateSettings({ layoutChange: '' });
  }
}
