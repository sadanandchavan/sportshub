import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import * as Prism from 'prismjs';
import { BreadcrumbComponent } from '../../../../../layouts/breadcrumb/breadcrumb.component';
import { IconsModule } from '../../../../../Component/icons/icons.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, IconsModule, NgbTooltipModule],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent {


  ngAfterViewInit() {
    Prism.highlightAll();
  }

}
