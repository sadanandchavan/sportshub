import { Component, QueryList, ViewChildren } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
interface User {
  name: string;
  email: string;
  joiningDate: string;
  avatar: string;
}

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, NgApexchartsModule, NgbModule],
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.css',
})
export class MembershipComponent {
  @ViewChildren(NgbDropdown) dropdowns: QueryList<NgbDropdown>;
  
  toggleDropdown(dropdown: NgbDropdown) {
    if (dropdown.isOpen()) {
      dropdown.close();
    } else {
      dropdown.open();
    }
  }
  users: User[] = [
    {
      name: 'Airi Satou',
      email: 'satou123@gmail.com',
      joiningDate: '2023/09/12',
      avatar: '../assets/images/user/avatar-4.jpg',
    },
    {
      name: 'Ashton Cox',
      email: 'ashton@gmail.com',
      joiningDate: '2023/12/24',
      avatar: '../assets/images/user/avatar-1.jpg',
    },
    {
      name: 'Bradley Greer',
      email: 'greer05@gmail.com',
      joiningDate: '2022/09/19',
      avatar: '../assets/images/user/avatar-2.jpg',
    },
    {
      name: 'Brielle Williamson',
      email: 'bw23@gmail.com',
      joiningDate: '2022/08/22',
      avatar: '../assets/images/user/avatar-3.jpg',
    },
    {
      name: 'Colleen Hurst',
      email: 'hurst006@gmail.com',
      joiningDate: '2022/06/26',
      avatar: '../assets/images/user/avatar-5.jpg',
    },
  ];
  public chartOptions: ApexOptions;
  public chartOptions1: ApexOptions;
  public chartOptions2: ApexOptions;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'area',
        height: 300,
        toolbar: {
          show: false,
        },
      },
      colors: ['#f4c22b', '#04a9f5'],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: 'top',
      },
      markers: {
        size: 1,
        colors: ['#fff', '#fff', '#fff'],
        strokeColors: ['#f4c22b', '#04a9f5'],
        strokeWidth: 1,
        shape: 'circle',
        hover: {
          size: 4,
        },
      },
      stroke: {
        width: 1,
        curve: 'smooth',
      },
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
      grid: {
        show: false,
      },
      series: [
        {
          name: 'Revenue',
          data: [
            200, 320, 320, 275, 275, 400, 400, 300, 440, 320, 320, 275, 275,
            400, 300, 440,
          ],
        },
        {
          name: 'Sales',
          data: [
            200, 250, 240, 300, 340, 320, 320, 400, 350, 250, 240, 300, 340,
            320, 400, 350,
          ],
        },
      ],
      xaxis: {
        labels: {
          hideOverlappingLabels: true,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
    };
    this.chartOptions1 = {
      series: [76],
      chart: {
        type: 'radialBar',
        offsetY: -20,
        sparkline: {
          enabled: true,
        },
      },
      colors: ['#04a9f5'],
      plotOptions: {
        radialBar: {
          startAngle: -95,
          endAngle: 95,
          hollow: {
            margin: 15,
            size: '40%',
          },
          track: {
            background: '#04a9f525',
            strokeWidth: '97%',
            margin: 10,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: 0,
              fontSize: '20px',
            },
          },
        },
      },
      grid: {
        padding: {
          top: 10,
        },
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['Average Results'],
    };
    this.chartOptions2 = {
      chart: {
        type: 'line',
        height: 150,
        toolbar: {
          show: false,
        },
      },
      colors: ['#1de9b6', '#1de9b6'],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: 'top',
      },
      markers: {
        size: 1,
        colors: ['#fff', '#fff'],
        strokeColors: ['#1de9b6', '#1de9b6'],
        strokeWidth: 1,
        shape: 'circle',
        hover: {
          size: 4,
        },
      },
      fill: {
        opacity: [1, 0.3],
      },
      stroke: {
        width: 3,
        curve: 'smooth',
      },
      grid: {
        show: false,
      },
      series: [
        {
          name: 'Active',
          data: [20, 90, 65, 85, 20, 80, 30],
        },
        {
          name: 'Inactive',
          data: [70, 30, 40, 15, 60, 40, 95],
        },
      ],
      xaxis: {
        labels: {
          hideOverlappingLabels: true,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
    };
  }
}
