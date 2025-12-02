import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private menusSource = new BehaviorSubject<any[]>([]);
  menus$ = this.menusSource.asObservable();

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    // Load menus when language changes
    this.translate.onLangChange.subscribe(() => this.loadMenus());
    this.loadMenus();
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
  private loadMenus(): void {
    this.translate.get('menuItems').subscribe((menuItems: any) => {
      this.menusSource.next(menuItems);
    });
  }
}
