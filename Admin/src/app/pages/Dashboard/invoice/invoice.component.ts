import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [BreadcrumbComponent, NgApexchartsModule, CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
})
export class InvoiceComponent {
  public chartOptions: any;
  public chartOptions1: any;

  constructor() {
    this.chartOptions = {
      chart: {
        height: 300,
        type: 'line',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
        },
      },
      legend: {
        show: false,
      },
      stroke: {
        width: [0, 2],
        curve: 'smooth',
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: 'TEAM A',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 25],
        },
        {
          name: 'TEAM B',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 35],
        },
      ],
      fill: {
        type: 'gradient',
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: [0, 1],
          opacityTo: [0.5, 1],
          stops: [0, 100],
          hover: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.15,
            opacityTo: 0.65,
            stops: [0, 96, 100],
          },
        },
      },
      markers: {
        size: 3,
        colors: '#fFF',
        strokeColors: '#f4c22b',
        strokeWidth: 2,
        shape: 'circle',
        hover: {
          size: 5,
        },
      },
      colors: ['#f4c22b', '#f4c22b'],
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      yaxis: {
        tickAmount: 3,
      },
      grid: {
        show: true,
        borderColor: '#00000010',
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tickAmount: 11,
      },
    };

    this.chartOptions1 = {
      chart: {
        height: 280,
        type: 'donut',
      },
      series: [27, 23, 20, 17],
      colors: ['#f4c22b', '#1de9b6', '#f44236', '#04a9f5'],
      labels: ['Pending', 'Paid', 'Overdue', 'Draft'],
      fill: {
        opacity: [1, 1, 1, 0.3],
      },
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              name: {
                show: true,
              },
              value: {
                show: true,
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            chart: {
              height: 250,
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '65%',
                  labels: {
                    show: false,
                  },
                },
              },
            },
          },
        },
      ],
    };
  }

  isDropdownOpen = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isDropdownOpen1 = false;
    this.isDropdownOpen2 = false;
  }
  isDropdownOpen1 = false;

  toggleDropdown1(): void {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
    this.isDropdownOpen = false;
    this.isDropdownOpen2 = false;
  }
  isDropdownOpen2 = false;

  toggleDropdown2(): void {
    this.isDropdownOpen2 = !this.isDropdownOpen2;
    this.isDropdownOpen1 = false;
    this.isDropdownOpen = false;
  }
}
