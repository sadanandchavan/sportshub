import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { SimplebarAngularModule } from 'simplebar-angular';
import { Tab } from 'bootstrap'; // Import Tab component from Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-mail',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, SimplebarAngularModule,NgbModule],
  templateUrl: './mail.component.html',
  styleUrl: './mail.component.css'
})
export class MailComponent {

  options = { autoHide: true };
  toggleMailList = false;
  mailDetailShow = false;
  sideBarCallpase = true;


  constructor(private elRef: ElementRef) { }

  @ViewChild('mailTabDetails', { static: true }) mailTabDetails!: ElementRef;

  ngAfterViewInit() {
    this.showMailTabDetails();
  }

  showMailTabDetails() {
    const tabElement = this.mailTabDetails?.nativeElement;
    if (tabElement) {
      const bootstrapTab = Tab.getOrCreateInstance(tabElement);
      bootstrapTab.show();
    } else {
      console.error('Tab element not found!');
    }
  }


}
