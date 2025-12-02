import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { LayoutSettingsService } from '../../layout-settings.service';
import { NavEnums } from '../../../Enum/enums';
import {
  NgbDropdown,
  NgbDropdownModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslationService } from '../../../service/translation.service';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';

interface MenuItem {
  type: NavEnums;
  icon: string;
  text: string;
  link?: string;
  children?: any[];
  badge?: number;
  action?: () => void;
  isDropdownOpen?: boolean;
}

@Component({
  selector: 'app-right-side-section',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    NgbDropdownModule,
    NgbTooltipModule,
    SimplebarAngularModule,
    TranslateModule
  ],
  templateUrl: './right-side-section.component.html',
  styleUrls: ['./right-side-section.component.css'],
})
export class RightSideSectionComponent {
  @ViewChildren(NgbDropdown) dropdowns: QueryList<NgbDropdown>;

  settings: any = {
    themeMode: 'light',
    sidebarTheme: 'light',
    accentColor: 'preset-1',
    sidebarCaption: true,
    rtl: false,
    containerWidth: false,
  };
  options = { autoHide: true };

  constructor(private settingsService: LayoutSettingsService,public languageService: TranslateService ) {
    languageService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event);
    });
  }

  switchLanguage(lang: string): void {
    this.languageService.use(lang);
  }
  ngOnInit(): void {
    this.settingsService.settings$.subscribe((settings) => {
      this.settings = settings;
    });
  }

  updateThemeMode(mode: 'light' | 'dark' | 'default'): void {
    this.settingsService.updateSettings({ themeMode: mode });
  }

  updateSidebarTheme(theme: 'light' | 'dark'): void {
    this.settingsService.updateSettings({ sidebarTheme: theme });
  }

  updateAccentColor(color: string): void {
    this.settingsService.updateSettings({ accentColor: color });
  }

  updateSidebarCaption(show: boolean): void {
    this.settingsService.updateSettings({ sidebarCaption: show });
  }

  updateRtl(isRtl: boolean): void {
    this.settingsService.updateSettings({ rtl: isRtl });
  }

  updateContainerWidth(isFixed: boolean): void {
    this.settingsService.updateSettings({ containerWidth: isFixed });
  }

  resetLayout(): void {
    this.settingsService.resetSettings();
  }

  onToggleDarkMode(event: any) {
    const isChecked = event.target.checked;
    this.updateThemeMode(isChecked ? 'dark' : 'light');
  }

  toggleDropdown(dropdown: NgbDropdown) {
    if (dropdown.isOpen()) {
      dropdown.close();
    } else {
      dropdown.open();
    }
  }
}
