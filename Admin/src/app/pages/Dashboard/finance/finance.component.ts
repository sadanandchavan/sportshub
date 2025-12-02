import { Component, QueryList, ViewChildren } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbDropdown,
  NgbModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NgApexchartsModule,
    CommonModule,
    FormsModule,
    NgbModule,
    NgbTooltipModule,
  ],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css',
})
export class FinanceComponent {
  @ViewChildren(NgbDropdown) dropdowns: QueryList<NgbDropdown>;
  public chartOptions: any;
  public chartOptions2: any;
  public chartOptions3: any;
  public chartOptions4: any;

  toggleDropdown(dropdown: NgbDropdown) {
    if (dropdown.isOpen()) {
      dropdown.close();
    } else {
      dropdown.open();
    }
  }
  constructor() {
    this.chartOptions = {
      chart: {
        type: 'line',
        height: 60,
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#1de9b6'],
      stroke: {
        curve: 'smooth', // 'smooth' instead of 'straight' for better interpolation
        lineCap: 'round',
        width: 3,
      },
      series: [
        {
          name: 'series1',
          data: [20, 10, 18, 12, 25, 10, 20],
        },
      ],
      yaxis: {
        min: 0,
        max: 30,
      },
      tooltip: {
        theme: 'dark',
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
        type: 'line',
        height: 60,
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#f44236'],
      stroke: {
        curve: 'smooth', // 'smooth' instead of 'straight' for better interpolation
        lineCap: 'round',
        width: 3,
      },
      series: [
        {
          name: 'series1',
          data: [20, 10, 18, 12, 25, 10, 20],
        },
      ],
      yaxis: {
        min: 0,
        max: 30,
      },
      tooltip: {
        theme: 'dark',
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
        type: 'bar',
        height: 210,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '70%',
          borderRadius: 2,
        },
      },
      fill: {
        opacity: [1, 0.4],
      },
      stroke: {
        show: true,
        width: 3,
        colors: ['transparent'],
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        show: true,
        fontFamily: `'Public Sans', sans-serif`,
        offsetX: 10,
        offsetY: 10,
        labels: {
          useSeriesColors: false,
        },
        markers: {
          width: 10,
          height: 10,
          radius: '50%',
          offsetX: 2,
          offsetY: 2,
        },
        itemMargin: {
          horizontal: 15,
          vertical: 5,
        },
      },
      colors: ['#04a9f5', '#04a9f5'],
      series: [
        {
          name: 'Income',
          data: [180, 90, 135, 114, 120, 145, 180, 90, 135, 114, 120, 145],
        },
        {
          name: 'Expends',
          data: [120, 45, 78, 150, 168, 99, 120, 45, 78, 150, 168, 99],
        },
      ],
      grid: {
        borderColor: '#00000010',
      },
      yaxis: {
        show: false,
      },
    };
    this.chartOptions4 = {
      chart: {
        height: 300,
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: 'bottom',
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
          },
        },
      },
      labels: ['Saving', 'Spend', 'Income'],
      series: [25, 50, 25],
      colors: ['#212529', '#04a9f5', '#caedfd'],
    };
  }

  public tableData = [
    {
      userName: 'Airi Satou',
      category: 'Salary Payment',
      dateTime:
        '2023/02/07 <span class="text-muted text-sm d-block">09:05 PM</span>',
      amount: '$950.54',
      status: 'Completed',
      statusClass: 'text-bg-success',
      image: '../assets/images/user/avatar-1.jpg',
    },
    {
      userName: 'Ashton Cox',
      category: 'Project Payment',
      dateTime:
        '2023/02/01 <span class="text-muted text-sm d-block">02:14 PM</span>',
      amount: '$520.30',
      status: 'Completed',
      statusClass: 'text-bg-success',
      image: '../assets/images/user/avatar-2.jpg',
    },
    {
      userName: 'Bradley Greer',
      category: 'You Tube Subscribe',
      dateTime:
        '2023/01/22 <span class="text-muted text-sm d-block">10:32 AM</span>',
      amount: '$100.00',
      status: 'Pending',
      statusClass: 'text-bg-warning',
      image: '../assets/images/user/avatar-3.jpg',
    },
    {
      userName: 'Brielle Williamson',
      category: 'Salary Payment',
      dateTime:
        '2023/02/07 <span class="text-muted text-sm d-block">09:05 PM</span>',
      amount: '$760.25',
      status: 'In Progress',
      statusClass: 'text-bg-primary',
      image: '../assets/images/user/avatar-4.jpg',
    },
    {
      userName: 'Airi Satou',
      category: 'Spotify Subscribe',
      dateTime:
        '2023/02/07 <span class="text-muted text-sm d-block">09:05 PM</span>',
      amount: '$60.05',
      status: 'Canceled',
      statusClass: 'text-bg-danger',
      image: '../assets/images/user/avatar-5.jpg',
    },
  ];
}
