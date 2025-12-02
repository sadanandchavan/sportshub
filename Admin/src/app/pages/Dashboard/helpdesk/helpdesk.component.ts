import { Component, QueryList, ViewChildren } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

@Component({
  selector: 'app-helpdesk',
  standalone: true,
  imports: [BreadcrumbComponent, NgApexchartsModule, NgbModule,SimplebarAngularModule],
  templateUrl: './helpdesk.component.html',
  styleUrl: './helpdesk.component.css',
})
export class HelpdeskComponent {
  @ViewChildren(NgbDropdown) dropdowns: QueryList<NgbDropdown>;
  options= {autoHide:true};
  public chartOptions: any;
  public chartOptions2: any;
  public chartOptions3: any;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true,
        },
      },
      colors: ['#3ebfea'],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      series: [
        {
          name: 'series1',
          data: [0, 20, 10, 45, 30, 55, 20, 30, 0],
        },
      ],
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName: string) {
              return '';
            },
          },
        },
        marker: {
          show: false,
        },
      },
    };
    this.chartOptions2 = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true,
        },
      },
      colors: ['#1de9b6'],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      series: [
        {
          name: 'series1',
          data: [0, 20, 10, 45, 30, 55, 20, 30, 0],
        },
      ],
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName: string) {
              return '';
            },
          },
        },
        marker: {
          show: false,
        },
      },
    };
    this.chartOptions3 = {
      chart: {
        height: 260,
        type: 'pie',
      },
      series: [66, 50, 40, 30],
      labels: ['Very Poor', 'Satisfied', 'Very Satisfied', 'Poor'],
      legend: {
        show: true,
        offsetY: 50,
      },
      theme: {
        monochrome: {
          enabled: true,
          color: '#04a9f5',
        },
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 320,
            },
            legend: {
              position: 'bottom',
              offsetY: 0,
            },
          },
        },
      ],
    };
  }
  toggleDropdown(dropdown: NgbDropdown) {
    if (dropdown.isOpen()) {
      dropdown.close();
    } else {
      dropdown.open();
    }
  }
}
