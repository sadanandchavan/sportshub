import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Menu, MenuItem } from '../../models/layouts.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IconsModule } from '../../Component/icons/icons.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { LayoutSettingsService } from '../layout-settings.service';
import { Feather } from 'angular-feather/icons';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-horizontal-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    HttpClientModule,
    IconsModule,
    SimplebarAngularModule,
    NavbarComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './horizontal-layout.component.html',
  styleUrl: './horizontal-layout.component.css',
})
export class HorizontalLayoutComponent {

constructor(public settingsService: LayoutSettingsService){}

  ngOnInit(){
    this.updateThemeMode('horizontal');
  }

  updateThemeMode(value){
    this.settingsService.updateSettings({ layoutChange: value });
  }

  ngOnDestroy(){
    this.settingsService.updateSettings({ layoutChange: '' });
  }
}
