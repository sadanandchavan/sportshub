import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { IconService } from '../../../service/icon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css',
})
export class CustomComponent {
  constructor(private iconService: IconService) {}

  iconList = [
    'custom-home',
    'custom-document',
    'custom-user',
    'custom-box-1',
    'custom-sort-outline',
    'custom-level',
    'custom-notification',
    'custom-setting-2',
    'custom-search-normal-1',
    'custom-layer',
    'custom-sms',
    'custom-document-text',
    'custom-user-bold',
    'custom-security-safe',
    'custom-notification-outline',
    'custom-setting-outline',
    'custom-share-bold',
    'custom-lock-outline',
    'custom-profile-2user-outline',
    'custom-add-outline',
    'custom-logout-1-outline',
    'custom-star-bold',
    'custom-airplane',
    'custom-mouse-circle',
    'custom-refresh-2',
    'custom-simcard-2',
    'custom-facebook',
    'custom-google',
    'custom-github',
    'custom-sun-1',
    'custom-moon',
    'custom-mask',
    'custom-mask-1-outline',
    'custom-bag',
    'custom-note-1',
    'custom-video-play',
    'custom-image',
    'custom-folder-open',
    'custom-user-add',
    'custom-status-up',
    'custom-notification-status',
    'custom-crop',
    'custom-keyboard',
    'custom-graph',
    'custom-kanban',
    'custom-link',
    'custom-login',
    'custom-logout',
    'custom-search-normal',
    'custom-shapes',
    'custom-calendar-1',
    'custom-message-2',
    'custom-shopping-bag',
    'custom-document-filter',
    'custom-direct-inbox',
    'custom-user-square',
    'custom-shield',
    'custom-call-calling',
    'custom-dollar-square',
    'custom-flag',
    'custom-data',
    'custom-presentation-chart',
    'custom-cpu-charge',
    'custom-text-block',
    'custom-row-vertical',
    'custom-document-upload',
    'custom-password-check',
    'custom-24-support',
    'custom-fatrows',
    'custom-element-plus',
    'custom-add-item',
    'custom-clipboard',
    'custom-story',
    'custom-text-align-justify-center',
  ];

  ngOnInit(): void {
    const svgContainer = document.createElement('div');
    svgContainer.classList.add('d-none');
    svgContainer.innerHTML = this.iconService.getIcons();
    document.body.appendChild(svgContainer);
  }

  // @ViewChild('iconWrapper') iconWrapper!: ElementRef;

  // ngAfterViewInit() {
  //   this.generateIcons();
  //   this.initializeClipboard();
  // }

  // generateIcons() {
  //   const iconWrapperEl = this.iconWrapper.nativeElement;
  //   this.iconList.forEach(icon => {
  //     let iconBlock = document.createElement('div');
  //     iconBlock.setAttribute('class', 'i-block');
  //     iconBlock.setAttribute('data-clipboard-text', icon);
  //     iconBlock.setAttribute('data-bs-toggle', 'tooltip');
  //     iconBlock.setAttribute('data-filter', icon);
  //     iconBlock.setAttribute('title', icon);

  //     let iconMain = document.createElement('svg');
  //     iconMain.setAttribute('class', 'pc-icon');

  //     let iconSymbol = document.createElement('use');
  //     iconSymbol.setAttribute('xlink:href', `#${icon}`);

  //     iconMain.appendChild(iconSymbol);
  //     iconBlock.appendChild(iconMain);
  //     iconWrapperEl.append(iconBlock);
  //   });
  // }

  // initializeClipboard() {
  //   const iCopy = new ClipboardJS('.i-block');
  //   iCopy.on('success', (e) => {
  //     const targetElement = e.trigger;
  //     let iconBadge = document.createElement('span');
  //     iconBadge.setAttribute('class', 'ic-badge badge bg-success');
  //     iconBadge.innerHTML = 'copied';
  //     targetElement.append(iconBadge);
  //     setTimeout(() => {
  //       targetElement.children[1].remove();
  //     }, 3000);
  //   });

  //   iCopy.on('error', (e) => {
  //     const targetElement = e.trigger;
  //     let iconBadge = document.createElement('span');
  //     iconBadge.setAttribute('class', 'ic-badge badge bg-danger');
  //     iconBadge.innerHTML = 'Error';
  //     targetElement.append(iconBadge);
  //     setTimeout(() => {
  //       targetElement.children[1].remove();
  //     }, 3000);
  //   });
  // }

  // onSearch(event: any) {
  //   const searchValue = event.target.value.toLowerCase();
  //   const iconBlocks = this.iconWrapper.nativeElement.querySelectorAll('.i-block');

  //   iconBlocks.forEach((block: any) => {
  //     const filter = block.getAttribute('data-filter').toLowerCase();
  //     block.style.display = filter.includes(searchValue) ? 'inline-flex' : 'none';
  //   });
  // }
}
