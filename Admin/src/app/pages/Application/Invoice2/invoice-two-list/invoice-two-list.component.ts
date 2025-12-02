import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../layouts/breadcrumb/breadcrumb.component';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoice-two-list',
  standalone: true,
  imports: [BreadcrumbComponent, NgApexchartsModule, CommonModule, FormsModule],
  templateUrl: './invoice-two-list.component.html',
  styleUrl: './invoice-two-list.component.css',
})
export class InvoiceTwoListComponent {
  public chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      height: 55,
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#1de9b6'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [
      {
        data: [0, 20, 10, 45, 30, 55, 20, 30],
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
          formatter: function (seriesName) {
            return 'Ticket ';
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
  public chartOptions1: ApexOptions = {
    chart: {
      type: 'area',
      height: 55,
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#f4c22b'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [
      {
        data: [30, 20, 55, 30, 45, 10, 20, 0],
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
          formatter: function (seriesName) {
            return 'Ticket ';
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
  public chartOptions2: ApexOptions = {
    chart: {
      type: 'area',
      height: 55,
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#f44236'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [
      {
        data: [0, 20, 10, 45, 30, 55, 20, 30],
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
          formatter: function (seriesName) {
            return 'Ticket ';
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
  activeTab: number = 1;

  isActiveTab(tabNumber: number): boolean {
    return this.activeTab === tabNumber;
  }

  setActiveTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }
  searchText1: string = '';
  itemsPerPage1: number = 10; // Set a default value if needed
  entriesOptions: number[] = [10, 20, 30, 50]; // Adjust options as needed
}
