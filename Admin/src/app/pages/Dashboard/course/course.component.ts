import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { ApexOptions } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
declare var peity: any;
import 'flatpickr/dist/flatpickr.css';
import { FlatpickrModule } from '../../../Component/flatpickr/flatpickr.module';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [
    NgApexchartsModule,
    BreadcrumbComponent,
    CommonModule,
    FlatpickrModule,
    NgbModule,
  ],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements AfterViewInit {
  dateValue: Date = new Date();

  @ViewChildren(NgbDropdown) dropdowns: QueryList<NgbDropdown>;

  toggleDropdown(dropdown: NgbDropdown) {
    if (dropdown.isOpen()) {
      dropdown.close();
    } else {
      dropdown.open();
    }
  }
  public chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      height: 250,
      toolbar: {
        show: false,
      },
    },
    colors: ['#f4c22b', '#4680ff'],
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
      strokeColors: ['#f4c22b', '#4680ff'],
      strokeWidth: 1,
      shape: 'circle',
      hover: {
        size: 4,
      },
    },
    stroke: {
      width: 2,
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
          200, 320, 320, 275, 275, 400, 400, 300, 440, 320, 320, 275, 275, 400,
          300, 440,
        ],
      },
      {
        name: 'Sales',
        data: [
          200, 250, 240, 300, 340, 320, 320, 400, 350, 250, 240, 300, 340, 320,
          400, 350,
        ],
      },
    ],
    xaxis: {
      tooltip: {
        enabled: false,
      },
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
  public chartOptions1: ApexOptions = {
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
          size: '50%',
        },
        track: {
          background: '#eaeaea',
          strokeWidth: '97%',
          margin: 20,
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
  public chartOptions2: ApexOptions = {
    chart: {
      type: 'bar',
      height: 210,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
        borderRadius: 3,
      },
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
        radius: 5,
        offsetX: 2,
        offsetY: 2,
      },
      itemMargin: {
        horizontal: 15,
        vertical: 5,
      },
    },
    colors: ['#04a9f5', '#ffa21d'],
    series: [
      {
        name: 'Net Profit',
        data: [180, 90, 135, 114, 120, 145, 180, 90, 135, 114, 120, 145],
      },
      {
        name: 'Revenue',
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
  public chartOptions3: ApexOptions = {
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
      curve: 'straight',
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
          formatter: function (seriesName) {
            return '';
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
  public chartOptions4: ApexOptions = {
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
      curve: 'straight',
      lineCap: 'round',
      width: 3,
    },
    series: [
      {
        name: 'series1',
        data: [20, 10, 25, 18, 18, 10, 12],
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
          formatter: function (seriesName) {
            return '';
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
  public chartOptions5: ApexOptions = {
    chart: {
      height: 250,
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
        },
      },
    },
    labels: ['Total Signups', 'Active Student'],
    series: [76.7, 30],
    legend: {
      show: true,
      position: 'bottom',
    },
    fill: {
      opacity: [1, 0.5],
    },
    colors: ['#04a9f5', '#04a9f5'],
  };
  public chartOptions6: ApexOptions = {
    chart: {
      type: 'line',
      height: 300,
      toolbar: {
        show: false,
      },
    },
    colors: ['#1de9b6', '#4680ff'],
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
      strokeColors: ['#1de9b6', '#4680ff'],
      strokeWidth: 1,
      shape: 'circle',
      hover: {
        size: 4,
      },
    },
    stroke: {
      width: 3,
      curve: 'smooth',
    },
    grid: {
      strokeDashArray: 4,
    },
    series: [
      {
        name: 'Free Course',
        data: [20, 90, 65, 85, 20, 80, 30],
      },
      {
        name: 'Subscription',
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
  public chartOptions7: ApexOptions = {
    chart: {
      type: 'bar',
      height: 220,
      toolbar: {
        show: false,
      },
    },
    colors: ['#1de9b6'],
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: 4,
    },
    yaxis: {
      tickAmount: 3,
    },
    states: {
      normal: {
        filter: {
          type: 'lighten',
          value: 0.5,
        },
      },
      hover: {
        filter: {
          type: 'lighten',
          value: 0,
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: '50%',
      },
    },
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    series: [
      {
        data: [20, 15, 22, 25, 32, 50],
      },
    ],
  };
  public chartOptions8: ApexOptions = {
    chart: {
      type: 'line',
      height: 230,
      toolbar: {
        show: false,
      },
    },
    colors: ['#f4c22b', '#4680ff'],
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 1,
      colors: ['#fff', '#fff', '#fff'],
      strokeColors: ['#f4c22b', '#4680ff'],
      strokeWidth: 1,
      shape: 'circle',
      hover: {
        size: 4,
      },
    },
    stroke: {
      width: 3,
    },
    grid: {
      strokeDashArray: 4,
    },
    series: [
      {
        name: 'Last Month',
        data: [200, 320, 275, 400, 300, 440],
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
  courses = [
    {
      name: 'Web Designing Course',
      teacher: 'Airi Satou',
      rating: 4.8,
      earning: '$200',
      sale: '5/7',
    },
    {
      name: 'UI/UX Training Course',
      teacher: 'Ashton Cox',
      rating: 5.0,
      earning: '$100',
      sale: '4/7',
    },
    {
      name: 'PHP Training Course',
      teacher: 'Bradley Greer',
      rating: 4.9,
      earning: '$80',
      sale: '2/7',
    },
    {
      name: 'Bootstrap 5 Course',
      teacher: 'Brielle Williamson',
      rating: 4.4,
      earning: '$150',
      sale: '6/7',
    },
    {
      name: 'C Training Course',
      teacher: 'Cedric Kelly',
      rating: 4.3,
      earning: '$50',
      sale: '3/7',
    },
  ];

  ngAfterViewInit() {
    peity.defaults.donut = {
      delimiter: null,
      fill: ['#ff9900', '#fff4dd', '#ffd592'],
      height: null,
      innerRadius: 11,
      radius: 16,
      width: null,
    };
    document.querySelectorAll('.donut').forEach((e) => peity(e, 'donut'));
  }
  breadCrumbItems!: Array<{}>;
  componentcolor: any = '#405189';
  monolith: any = '#0AB39C';
  nano: any = '#3577F1';
  color: any;

  colorTheme: any = 'theme-blue';
  // bsConfig?: Partial<BsDatepickerConfig>;
  minDate: any;
  maxDate: any;
  defaultdate: any = new Date();
  form!: UntypedFormGroup;
  disabledDates: any;
  bsInlineValue = new Date();
  mytime: Date = new Date();
  myTime: Date = new Date();
  minTime: Date = new Date();
  maxTime: Date = new Date();

  constructor(private formBuilder: UntypedFormBuilder) {
    this.minTime.setHours(8);
    this.minTime.setMinutes(0);
    this.maxTime.setHours(23);
    this.maxTime.setMinutes(55);
  }
  ngOnInit(): void {
    // this.bsConfig = Object.assign({}, { containerClass: this.colorTheme, showWeekNumbers: false });
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    // this.form.controls['defaultdate'].setValue(this.defaultdate);

    this.form = this.formBuilder.group({
      defaultdate: [this.defaultdate, [Validators.required]],
    });

    this.disabledDates = [new Date()];
  }
}
