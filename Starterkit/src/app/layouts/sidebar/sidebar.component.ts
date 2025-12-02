import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { IconsModule } from '../../Component/icons/icons.module';
import { Menu, MenuItem } from '../../models/layouts.model';
import { SimplebarAngularModule } from 'simplebar-angular';
import { LayoutSettingsService } from '../layout-settings.service';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from '../../service/sidebar.service';
import { TranslationService } from '../../service/translation.service';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    HttpClientModule,
    IconsModule,
    SimplebarAngularModule,
    RouterModule,
    NgbCollapseModule,
    TranslateModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isSidebarHidden = false;
  isMobile: boolean = window.innerWidth <= 1024;
  options = { autoHide: true };
  navItems: Menu[] = [];
  callpseSideBar: boolean = false;


  ngOnInit(): void {
    this.test()
    this.settingService.toggleSideBarSubject$.subscribe((data) => {
      this.callpseSideBar = data;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveMenu(this.router.url);
      }
    });
    this.sidebarService.sidebarHidden$.subscribe((hidden) => {
      this.isSidebarHidden = hidden;
    });
  }

  test() {
    this.http.get<Menu[]>('/assets/navbar-data.json').subscribe((data) => {
      this.navItems = data;

      this.setActiveMenu(this.router.url);
    });
  }
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 1024;
  }
  constructor(private translationService: TranslationService,
    private http: HttpClient,
    private settingService: LayoutSettingsService,
    public router: Router,
    private translate: TranslateService,
    private sidebarService: SidebarService) {

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.test()
    });
    translate.setDefaultLang('fr');
  }

  toggleSidebarMobile(): void {
    this.sidebarService.toggleSidebar();
  }

  closeSidebar(): void {
    // Explicitly hide the sidebar
    this.sidebarService.setSidebarVisibility(true);
  }

  closeOutSide() {
    this.sidebarService.setSidebarVisibility(true)
    console.log("clicl");

  }

  openLink(item: MenuItem) {
    if (!item.link) {
      return;
    }
    if (item.isLeadingPageIcon) {
      window.open(item.link, '_blank');
    } else {
      this.router.navigate([item.link]);
    }
  }

  setActiveMenu(url: string) {
    this.navItems.forEach((navItem) => {
      navItem.menuItems.forEach((menuItem) => {
        if (menuItem.link === url) {
          this.toggleCollapse(menuItem);
        } else if (menuItem.subMenus) {
          menuItem.subMenus.forEach((subMenu) => {
            if (subMenu.link === url) {
              this.toggleCollapse(menuItem);
              this.toggleInnerSubMenuNew(subMenu, menuItem);
            } else if (subMenu.innerSubMenu) {
              subMenu.innerSubMenu.forEach((innerSubMenu) => {
                if (innerSubMenu.link === url) {
                  this.toggleCollapse(menuItem);
                  this.toggleInnerSubMenuNew(subMenu, menuItem);
                  subMenu.subMenuOpen = true;
                }
              });
            }
          });
        }
      });
    });
  }

  toggleCollapse(menuItem: MenuItem) {
    this.navItems.forEach((navItem) => {
      navItem.menuItems.forEach((item) => {
        if (item !== menuItem) {
          item.open = false;

          item.subMenus.forEach((element) => {
            element.subMenuOpen = false;
          });
        }
      });
    });

    menuItem.open = !menuItem.open;
  }

  toggleInnerSubMenuNew(subMenu: any, menuItem: MenuItem) {
    menuItem.open = true;

    menuItem.subMenus?.forEach((sub) => {
      if (sub !== subMenu) {
        sub.subMenuOpen = false;
      }
    });

    subMenu.subMenuOpen = !subMenu.subMenuOpen;
  }

  trackByMenuIndex(index: number): number {
    return index;
  }

  trackBySubMenuIndex(index: number): number {
    return index;
  }
}
