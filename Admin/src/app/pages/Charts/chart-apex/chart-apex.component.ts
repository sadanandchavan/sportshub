import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-chart-apex',
  standalone: true,
  imports: [BreadcrumbComponent, NgApexchartsModule],
  templateUrl: './chart-apex.component.html',
  styleUrls: ['./chart-apex.component.css'],
})
export class ChartApexComponent {
  public data: { x: number; y: number }[] = [];
  private lastDate = 0;

  public chartOptions: any;
  public stackedBarChartOptions: any;
  public horizontalBarChartOptions: any;
  public stackedBarChartOptions1: any;
  public pieChartOptions: any;
  public pieChart2Options: any;
  public radialBarChart1Options: any;
  public radialBarChart2Options: any;
  public lineChartOptions: any;
  public lineChartOptions1: any;
  public linecharts2Options: any;
  public areaChartOptions: any;
  public areachart2Options: any;
  public mixedchart1Options: any;
  public mixedchart2Options: any;
  public candlestickOptions: any;
  public bubblechart1Options: any;
  public bubblechart2Options: any;
  public scatterchart1Options: any;
  public scatterchart2Options: any;
  public heatmapchart1Options: any;
  public heatmapchart2Options: any;
  public radarChart1Options: any;
  public radarChart2Options: any;

  constructor() {
    this.chartOptions = {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#1DE9B6', '#04A9F5', '#3EBFEA'],
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63],
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91],
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52],
        },
      ],
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return '$ ' + val + ' thousands';
          },
        },
      },
    };
    this.stackedBarChartOptions = {
      // Updated name here
      chart: {
        height: 350,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      colors: ['#04A9F5', '#1DE9B6', '#F4C22B', '#3EBFEA'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      series: [
        {
          name: 'PRODUCT A',
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: 'PRODUCT B',
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: 'PRODUCT C',
          data: [11, 17, 15, 15, 21, 14],
        },
        {
          name: 'PRODUCT D',
          data: [21, 7, 25, 13, 22, 8],
        },
      ],
      xaxis: {
        type: 'datetime',
        categories: [
          '01/01/2011 GMT',
          '01/02/2011 GMT',
          '01/03/2011 GMT',
          '01/04/2011 GMT',
          '01/05/2011 GMT',
          '01/06/2011 GMT',
        ],
      },
      legend: {
        position: 'bottom',
      },
      fill: {
        opacity: 1,
      },
    };
    this.horizontalBarChartOptions = {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        },
      },
      colors: ['#04A9F5', '#1DE9B6'],
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff'],
      },
      series: [
        {
          data: [44, 55, 41, 64, 22, 43, 21],
        },
        {
          data: [53, 32, 33, 52, 13, 44, 32],
        },
      ],
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
      },
    };
    this.stackedBarChartOptions1 = {
      chart: {
        height: 350,
        type: 'bar',
        stacked: true,
        stackType: '100%', // Specifies 100% stacked type
      },
      plotOptions: {
        bar: {
          horizontal: true, // Ensures the bars are horizontal
        },
      },
      colors: ['#04A9F5', '#3EBFEA', '#1DE9B6', '#F4C22B', '#F44236'],
      stroke: {
        width: 1,
        colors: ['#fff'], // Stroke color set to white for better separation
      },
      series: [
        {
          name: 'Marine Sprite',
          data: [44, 55, 41, 37, 22, 43, 21],
        },
        {
          name: 'Striking Calf',
          data: [53, 32, 33, 52, 13, 43, 32],
        },
        {
          name: 'Tank Picture',
          data: [12, 17, 11, 9, 15, 11, 20],
        },
        {
          name: 'Bucket Slope',
          data: [9, 7, 5, 8, 6, 9, 4],
        },
        {
          name: 'Reborn Kid',
          data: [25, 12, 19, 32, 25, 24, 10],
        },
      ],
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      },
      tooltip: {
        y: {
          formatter: function (val: number): string {
            // Type the parameter
            return val + 'K'; // Custom tooltip formatting
          },
        },
      },
      fill: {
        opacity: 1, // Ensures full opacity
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
    };
    this.pieChartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        height: 320,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      colors: ['#04A9F5', '#1DE9B6', '#3EBFEA', '#F4C22B', '#F44236'],
      legend: {
        show: true,
        position: 'bottom',
      },
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      fill: {
        opacity: 1,
      },
    };
    this.pieChart2Options = {
      series: [44, 55, 41, 17, 15],
      chart: {
        height: 320,
        type: 'donut',
      },
      colors: ['#04A9F5', '#1DE9B6', '#3EBFEA', '#F4C22B', '#F44236'],
      legend: {
        show: true,
        position: 'bottom',
      },
      plotOptions: {
        pie: {
          donut: {
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
        enabled: true,
        dropShadow: {
          enabled: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      fill: {
        opacity: 1,
      },
    };
    this.radialBarChart1Options = {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          },
        },
      },
      colors: ['#04A9F5'],
      series: [70],
      labels: ['Cricket'],
    };
    this.radialBarChart2Options = {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: -30,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ['#04A9F5', '#1DE9B6', '#F4C22B', '#F44236'],
      series: [76, 67, 61, 90],
      labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
      legend: {
        show: true,
        floating: true,
        fontSize: '14px',
        position: 'left',
        offsetX: 0,
        offsetY: 0,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: (
          seriesName: string,
          opts: { w: { globals: { series: number[] } }; seriesIndex: number }
        ) => {
          return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 1,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    };
    this.lineChartOptions = {
      chart: {
        height: 300,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
        width: 2,
      },
      stroke: {
        curve: 'straight',
      },
      colors: ['#04A9F5'],
      series: [
        {
          name: 'Desktops',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      grid: {
        row: {
          colors: ['#f3f6ff', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
    this.lineChartOptions1 = {
      series: [
        {
          name: 'Data',
          data: this.data,
        },
      ],
      chart: {
        type: 'line',
        height: 300,
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 2000,
          },
        },
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      colors: ['#04A9F5'],
      markers: {
        size: 0,
      },
      xaxis: {
        type: 'datetime',
        range: 777600000,
      },
      yaxis: {
        max: 100,
      },
      legend: {
        show: false,
      },
    };
    this.linecharts2Options = {
      chart: {
        height: 300,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5],
      },
      colors: ['#1DE9B6', '#F4C22B', '#F44236'],
      series: [
        {
          name: 'Session Duration',
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
        {
          name: 'Page Views',
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
        },
        {
          name: 'Total Visits',
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
        },
      ],
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: [
          '01 Jan',
          '02 Jan',
          '03 Jan',
          '04 Jan',
          '05 Jan',
          '06 Jan',
          '07 Jan',
          '08 Jan',
          '09 Jan',
          '10 Jan',
          '11 Jan',
          '12 Jan',
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: (val: number) => `${val} (mins)`,
            },
          },
          {
            title: {
              formatter: (val: number) => `${val} per session`,
            },
          },
          {
            title: {
              formatter: (val: number) => `${val}`,
            },
          },
        ],
      },
      grid: {
        borderColor: '#f1f1f1',
      },
    };
    this.areaChartOptions = {
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      colors: ['#F4C22B', '#F44236'],
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00',
          '2018-09-19T01:30:00',
          '2018-09-19T02:30:00',
          '2018-09-19T03:30:00',
          '2018-09-19T04:30:00',
          '2018-09-19T05:30:00',
          '2018-09-19T06:30:00',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
    this.areachart2Options = {
      annotations: {
        yaxis: [
          {
            y: 30,
            borderColor: '#999',
            label: {
              show: true,
              text: 'Support',
              style: {
                color: '#fff',
                background: '#00E396',
              },
            },
          },
        ],
        xaxis: [
          {
            x: new Date('14 Nov 2012').getTime(),
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
              show: true,
              text: 'Rally',
              style: {
                color: '#fff',
                background: '#775DD0',
              },
            },
          },
        ],
      },
      chart: {
        type: 'area',
        height: 320,
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          data: [
            [1327359600000, 30.95],
            [1327446000000, 31.34],
            [1327532400000, 31.18],
            [1327618800000, 31.05],
            // ... add the rest of your data here
          ],
        },
      ],
      markers: {
        size: 0,
        style: 'hollow',
      },
      colors: ['#04A9F5'],
      xaxis: {
        type: 'datetime',
        min: new Date('01 Mar 2012').getTime(),
        tickAmount: 6,
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    };
    this.mixedchart1Options = {
      series: [
        {
          name: 'Website Blog',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
          name: 'Social Media',
          type: 'line',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: [0, 4],
      },
      colors: ['#04A9F5', '#F44236'],
      labels: [
        '01 Jan 2001',
        '02 Jan 2001',
        '03 Jan 2001',
        '04 Jan 2001',
        '05 Jan 2001',
        '06 Jan 2001',
        '07 Jan 2001',
        '08 Jan 2001',
        '09 Jan 2001',
        '10 Jan 2001',
        '11 Jan 2001',
        '12 Jan 2001',
      ],
      xaxis: {
        type: 'datetime',
      },
    };
    this.mixedchart2Options = {
      series: [
        {
          name: 'Facebook',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
          name: 'Vine',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
          name: 'Dribbble',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth',
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
        },
      },
      colors: ['#F44236', '#04A9F5', '#F4C22B'],
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        '01/01/2003',
        '02/01/2003',
        '03/01/2003',
        '04/01/2003',
        '05/01/2003',
        '06/01/2003',
        '07/01/2003',
        '08/01/2003',
        '09/01/2003',
        '10/01/2003',
        '11/01/2003',
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        min: 0,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (y: number | undefined): string => {
            if (typeof y !== 'undefined') {
              return y.toFixed(0) + ' views';
            }
            return '';
          },
        },
      },
      legend: {
        labels: {
          useSeriesColors: true,
        },
        markers: {
          customHTML: [
            function () {
              return '';
            },
            function () {
              return '';
            },
            function () {
              return '';
            },
          ],
        },
      },
    };
    this.candlestickOptions = {
      chart: {
        height: 350,
        type: 'candlestick',
      },
      series: [
        {
          data: [
            {
              x: new Date(1538778600000),
              y: [6629.81, 6650.5, 6623.04, 6633.33],
            },
            {
              x: new Date(1538780400000),
              y: [6632.01, 6643.59, 6620, 6630.11],
            },
            {
              x: new Date(1538782200000),
              y: [6630.71, 6648.95, 6623.34, 6635.65],
            },
            {
              x: new Date(1538784000000),
              y: [6635.65, 6651, 6629.67, 6638.24],
            },
            { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
            {
              x: new Date(1538787600000),
              y: [6624.53, 6636.03, 6621.68, 6624.31],
            },
            { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
            {
              x: new Date(1538791200000),
              y: [6627, 6627.62, 6584.22, 6603.02],
            },
            {
              x: new Date(1538793000000),
              y: [6605, 6608.03, 6598.95, 6604.01],
            },
            {
              x: new Date(1538794800000),
              y: [6604.5, 6614.4, 6602.26, 6608.02],
            },
            {
              x: new Date(1538796600000),
              y: [6608.02, 6610.68, 6601.99, 6608.91],
            },
            {
              x: new Date(1538798400000),
              y: [6608.91, 6618.99, 6608.01, 6612],
            },
            { x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6612] },
            {
              x: new Date(1538802000000),
              y: [6612, 6624.12, 6608.43, 6622.95],
            },
            {
              x: new Date(1538803800000),
              y: [6623.91, 6623.91, 6615, 6615.67],
            },
            { x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] },
            { x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] },
            {
              x: new Date(1538809200000),
              y: [6614.9, 6626.2, 6613.33, 6623.45],
            },
            {
              x: new Date(1538811000000),
              y: [6623.48, 6627, 6618.38, 6620.35],
            },
            {
              x: new Date(1538812800000),
              y: [6619.43, 6620.35, 6610.05, 6615.53],
            },
            {
              x: new Date(1538814600000),
              y: [6615.53, 6617.93, 6610, 6615.19],
            },
            { x: new Date(1538816400000), y: [6615.19, 6621.6, 6608.2, 6620] },
            {
              x: new Date(1538818200000),
              y: [6619.54, 6625.17, 6614.15, 6620],
            },
            {
              x: new Date(1538820000000),
              y: [6620.33, 6634.15, 6617.24, 6624.61],
            },
            {
              x: new Date(1538821800000),
              y: [6625.95, 6626, 6611.66, 6617.58],
            },
            {
              x: new Date(1538823600000),
              y: [6619, 6625.97, 6595.27, 6598.86],
            },
            {
              x: new Date(1538825400000),
              y: [6598.86, 6598.88, 6570, 6587.16],
            },
            { x: new Date(1538827200000), y: [6588.86, 6600, 6580, 6593.4] },
            {
              x: new Date(1538829000000),
              y: [6593.99, 6598.89, 6585, 6587.81],
            },
            {
              x: new Date(1538830800000),
              y: [6587.81, 6592.73, 6567.14, 6578],
            },
            {
              x: new Date(1538832600000),
              y: [6578.35, 6581.72, 6567.39, 6579],
            },
            {
              x: new Date(1538834400000),
              y: [6579.38, 6580.92, 6566.77, 6575.96],
            },
            {
              x: new Date(1538836200000),
              y: [6575.96, 6589, 6571.77, 6588.92],
            },
            {
              x: new Date(1538838000000),
              y: [6588.92, 6594, 6577.55, 6589.22],
            },
            {
              x: new Date(1538839800000),
              y: [6589.3, 6598.89, 6589.1, 6596.08],
            },
            { x: new Date(1538841600000), y: [6597.5, 6600, 6588.39, 6596.25] },
            {
              x: new Date(1538843400000),
              y: [6598.03, 6600, 6588.73, 6595.97],
            },
            {
              x: new Date(1538845200000),
              y: [6595.97, 6602.01, 6588.17, 6602],
            },
            { x: new Date(1538847000000), y: [6602, 6607, 6596.51, 6599.95] },
            {
              x: new Date(1538848800000),
              y: [6600.63, 6601.21, 6590.39, 6591.02],
            },
            { x: new Date(1538850600000), y: [6591.02, 6603.08, 6591, 6591] },
            { x: new Date(1538852400000), y: [6591, 6601.32, 6585, 6592] },
            {
              x: new Date(1538854200000),
              y: [6593.13, 6596.01, 6590, 6593.34],
            },
            {
              x: new Date(1538856000000),
              y: [6593.34, 6604.76, 6582.63, 6593.86],
            },
            {
              x: new Date(1538857800000),
              y: [6593.86, 6604.28, 6586.57, 6600.01],
            },
            {
              x: new Date(1538859600000),
              y: [6601.81, 6603.21, 6592.78, 6596.25],
            },
            { x: new Date(1538861400000), y: [6596.25, 6604.2, 6590, 6602.99] },
            {
              x: new Date(1538863200000),
              y: [6602.99, 6606, 6584.99, 6586.19],
            },
            {
              x: new Date(1538865000000),
              y: [6586.19, 6588.23, 6573.62, 6581.45],
            },
            {
              x: new Date(1538866800000),
              y: [6581.45, 6588.9, 6573.56, 6583.95],
            },
            { x: new Date(1538868600000), y: [6583.95, 6585, 6572.7, 6579.05] },
            {
              x: new Date(1538870400000),
              y: [6579.05, 6586.51, 6570.49, 6581.15],
            },
            {
              x: new Date(1538872200000),
              y: [6581.15, 6585.11, 6572.99, 6582],
            },
            { x: new Date(1538874000000), y: [6582, 6586, 6572.67, 6580.45] },
            {
              x: new Date(1538875800000),
              y: [6580.45, 6589.95, 6578.1, 6587.33],
            },
            {
              x: new Date(1538877600000),
              y: [6587.33, 6594.91, 6574.49, 6580.39],
            },
            {
              x: new Date(1538879400000),
              y: [6580.39, 6588.73, 6575.67, 6585.32],
            },
            {
              x: new Date(1538881200000),
              y: [6585.32, 6590.49, 6574.32, 6580.78],
            },
            {
              x: new Date(1538883000000),
              y: [6580.78, 6587.65, 6572, 6580.31],
            },
            {
              x: new Date(1538884800000),
              y: [6580.31, 6585.6, 6574.51, 6582.71],
            },
            {
              x: new Date(1538886600000),
              y: [6582.71, 6590.5, 6575.09, 6581.42],
            },
            {
              x: new Date(1538888400000),
              y: [6581.42, 6585.6, 6574.61, 6581.5],
            },
            { x: new Date(1538890200000), y: [6581.5, 6587, 6575, 6584.68] },
            { x: new Date(1538892000000), y: [6584.68, 6592, 6575, 6584] },
            { x: new Date(1538893800000), y: [6584, 6585, 6572.41, 6577.72] },
            { x: new Date(1538895600000), y: [6577.72, 6581, 6565.51, 6580] },
            { x: new Date(1538897400000), y: [6580, 6582.56, 6568.3, 6580.29] },
            {
              x: new Date(1538899200000),
              y: [6580.29, 6587.2, 6576.18, 6580.28],
            },
            {
              x: new Date(1538901000000),
              y: [6580.28, 6587, 6574.62, 6580.29],
            },
            { x: new Date(1538902800000), y: [6580.29, 6589, 6576, 6587.5] },
          ],
        },
      ],
      colors: ['#1DE9B6', '#F44236'],
      fill: {
        type: 'solid',
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    };
    this.bubblechart1Options = {
      chart: {
        height: 350,
        type: 'bubble',
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: 'Bubble1',
          data: this.generateBubbleData(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            { min: 10, max: 60 }
          ),
        },
        {
          name: 'Bubble2',
          data: this.generateBubbleData(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            { min: 10, max: 60 }
          ),
        },
        {
          name: 'Bubble3',
          data: this.generateBubbleData(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            { min: 10, max: 60 }
          ),
        },
        {
          name: 'Bubble4',
          data: this.generateBubbleData(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            { min: 10, max: 60 }
          ),
        },
      ],
      colors: ['#04A9F5', '#1DE9B6', '#F4C22B', '#F44236'],
      fill: {
        opacity: 0.8,
      },
      xaxis: {
        tickAmount: 12,
        type: 'category',
      },
      yaxis: {
        max: 70,
      },
    };
    this.bubblechart2Options = {
      chart: {
        height: 350,
        type: 'bubble',
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: 'Product1',
          data: this.generateDatasehratheatbubble3d(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            { min: 10, max: 60 }
          ),
        },
        {
          name: 'Product2',
          data: this.generateDatasehratheatbubble3d(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            { min: 10, max: 60 }
          ),
        },
        {
          name: 'Product3',
          data: this.generateDatasehratheatbubble3d(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            { min: 10, max: 60 }
          ),
        },
        {
          name: 'Product4',
          data: this.generateDatasehratheatbubble3d(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            { min: 10, max: 60 }
          ),
        },
      ],
      fill: {
        type: 'gradient',
      },
      colors: ['#04A9F5', '#1DE9B6', '#F4C22B', '#F44236'],
      xaxis: {
        tickAmount: 12,
        type: 'datetime',
        labels: {
          rotate: 0,
        },
      },
      yaxis: {
        max: 70,
      },
      theme: {
        palette: 'palette2',
      },
    };
    this.scatterchart1Options = {
      chart: {
        height: 350,
        type: 'scatter',
        zoom: {
          enabled: true,
          type: 'xy',
        },
      },
      colors: ['#04A9F5', '#1DE9B6', '#F44236', '#F4C22B', '#3EBFEA'],
      series: [
        {
          name: 'SAMPLE A',
          data: [
            [16.4, 5.4],
            [21.7, 2],
            [25.4, 3],
            [19, 2],
            [10.9, 1],
            [13.6, 3.2],
            [10.9, 7.4],
            [10.9, 0],
            [10.9, 8.2],
            [16.4, 0],
            [16.4, 1.8],
            [13.6, 0.3],
            [13.6, 0],
            [29.9, 0],
            [27.1, 2.3],
            [16.4, 0],
            [13.6, 3.7],
            [10.9, 5.2],
            [16.4, 6.5],
            [10.9, 0],
            [24.5, 7.1],
            [10.9, 0],
            [8.1, 4.7],
            [19, 0],
            [21.7, 1.8],
            [27.1, 0],
            [24.5, 0],
            [27.1, 0],
            [29.9, 1.5],
            [27.1, 0.8],
            [22.1, 2],
          ],
        },
        {
          name: 'SAMPLE B',
          data: [
            [36.4, 13.4],
            [1.7, 11],
            [5.4, 8],
            [9, 17],
            [1.9, 4],
            [3.6, 12.2],
            [1.9, 14.4],
            [1.9, 9],
            [1.9, 13.2],
            [1.4, 7],
            [6.4, 8.8],
            [3.6, 4.3],
            [1.6, 10],
            [9.9, 2],
            [7.1, 15],
            [1.4, 0],
            [3.6, 13.7],
            [1.9, 15.2],
            [6.4, 16.5],
            [0.9, 10],
            [4.5, 17.1],
            [10.9, 10],
            [0.1, 14.7],
            [9, 10],
            [12.7, 11.8],
            [2.1, 10],
            [2.5, 10],
            [27.1, 10],
            [2.9, 11.5],
            [7.1, 10.8],
            [2.1, 12],
          ],
        },
        {
          name: 'SAMPLE C',
          data: [
            [21.7, 3],
            [23.6, 3.5],
            [24.6, 3],
            [29.9, 3],
            [21.7, 20],
            [23, 2],
            [10.9, 3],
            [28, 4],
            [27.1, 0.3],
            [16.4, 4],
            [13.6, 0],
            [19, 5],
            [22.4, 3],
            [24.5, 3],
            [32.6, 3],
            [27.1, 4],
            [29.6, 6],
            [31.6, 8],
            [21.6, 5],
            [20.9, 4],
            [22.4, 0],
            [32.6, 10.3],
            [29.7, 20.8],
            [24.5, 0.8],
            [21.4, 0],
            [21.7, 6.9],
            [28.6, 7.7],
            [15.4, 0],
            [18.1, 0],
            [33.4, 0],
            [16.4, 0],
          ],
        },
      ],
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function (val: number) {
            return parseFloat(val.toFixed(1));
          },
        },
      },
      yaxis: {
        tickAmount: 7,
      },
    };
    this.scatterchart2Options = {
      chart: {
        height: 350,
        type: 'scatter',
        zoom: {
          type: 'xy',
        },
      },
      series: [
        {
          name: 'TEAM 1',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: 'TEAM 2',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: 'TEAM 3',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            30,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: 'TEAM 4',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            10,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: 'TEAM 5',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            30,
            {
              min: 10,
              max: 60,
            }
          ),
        },
      ],
      dataLabels: {
        enabled: false,
      },
      colors: ['#04A9F5', '#1DE9B6', '#F44236', '#F4C22B', '#3EBFEA'],
      grid: {
        xaxis: {
          showLines: true,
        },
        yaxis: {
          showLines: true,
        },
      },
      legend: {
        offsetY: 8,
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        max: 70,
      },
    };
    this.heatmapchart1Options = {
      chart: {
        height: 350,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#04A9F5'],
      series: [
        {
          name: 'Metric1',
          data: this.generateDatasehratheat(12, { min: 0, max: 90 }),
        },
        {
          name: 'Metric2',
          data: this.generateDatasehratheat(12, { min: 0, max: 90 }),
        },
        {
          name: 'Metric3',
          data: this.generateDatasehratheat(12, { min: 0, max: 90 }),
        },
        {
          name: 'Metric4',
          data: this.generateDatasehratheat(12, { min: 0, max: 90 }),
        },
        {
          name: 'Metric5',
          data: this.generateDatasehratheat(12, { min: 0, max: 90 }),
        },
        {
          name: 'Metric6',
          data: this.generateDatasehratheat(12, { min: 0, max: 90 }),
        },
        {
          name: 'Metric7',
          data: this.generateDatasehratheat(12, { min: 0, max: 90 }),
        },
        {
          name: 'Metric8',
          data: this.generateDatasehratheat(12, { min: 0, max: 90 }),
        },
        {
          name: 'Metric9',
          data: this.generateDatasehratheat(12, { min: 0, max: 90 }),
        },
      ],
    };
    this.heatmapchart2Options = {
      chart: {
        height: 350,
        type: 'heatmap',
      },
      stroke: {
        width: 0,
      },
      plotOptions: {
        heatmap: {
          radius: 30,
          enableShades: false,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 50,
                color: '#F4C22B',
              },
              {
                from: 51,
                to: 100,
                color: '#F44236',
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#fff'],
        },
      },
      series: [
        {
          name: 'Metric1',
          data: this.generateDatasehrat(15, { min: 0, max: 90 }),
        },
        {
          name: 'Metric2',
          data: this.generateDatasehrat(15, { min: 0, max: 90 }),
        },
        {
          name: 'Metric3',
          data: this.generateDatasehrat(15, { min: 0, max: 90 }),
        },
        {
          name: 'Metric4',
          data: this.generateDatasehrat(15, { min: 0, max: 90 }),
        },
        {
          name: 'Metric5',
          data: this.generateDatasehrat(15, { min: 0, max: 90 }),
        },
        {
          name: 'Metric6',
          data: this.generateDatasehrat(15, { min: 0, max: 90 }),
        },
        {
          name: 'Metric7',
          data: this.generateDatasehrat(15, { min: 0, max: 90 }),
        },
        {
          name: 'Metric8',
          data: this.generateDatasehrat(15, { min: 0, max: 90 }),
        },
        {
          name: 'Metric9',
          data: this.generateDatasehrat(15, { min: 0, max: 90 }),
        },
      ],
      colors: ['#04A9F5', '#3EBFEA', '#1DE9B6', '#F4C22B', '#F44236'],
      xaxis: {
        type: 'category',
      },
    };
    this.radarChart1Options = {
      chart: {
        height: 350,
        type: 'radar',
      },
      series: [
        {
          name: 'Series 1',
          data: [20, 100, 40, 30, 50, 80, 33],
        },
      ],
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColor: '#f3f6ff',
            fill: {
              colors: ['#f3f6ff', '#fff'],
            },
          },
        },
      },
      colors: ['#F44236'],
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#F44236',
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: (val: number) => {
            return val.toString();
          },
        },
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: (val: number, i: number) => {
            if (i % 2 === 0) {
              return val.toString();
            } else {
              return '';
            }
          },
        },
      },
    };
    this.radarChart2Options = {
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      series: [
        {
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          name: 'Series 2',
          data: [20, 30, 40, 80, 20, 80],
        },
        {
          name: 'Series 3',
          data: [44, 76, 78, 13, 43, 10],
        },
      ],
      colors: ['#04A9F5', '#1DE9B6', '#F44236'],
      stroke: {
        width: 0,
      },
      fill: {
        opacity: 0.7,
      },
      markers: {
        size: 0,
      },
      labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
    };
  }
  generateBubbleData(
    baseval: number,
    count: number,
    yrange: { min: number; max: number }
  ) {
    const series = [];
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
    }
    return series;
  }
  generateDatasehratheatbubble3d(
    baseval: number,
    count: number,
    yrange: { min: number; max: number }
  ) {
    const series = [];
    for (let i = 0; i < count; i++) {
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([baseval, y, z]);
      baseval += 86400000;
    }
    return series;
  }
  generateDayWiseTimeSeries(
    baseval: number,
    count: number,
    yrange: { min: number; max: number }
  ) {
    const series = [];
    for (let i = 0; i < count; i++) {
      const x = baseval + i * 24 * 3600 * 1000; // Incrementing by day
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({ x, y });
    }
    return series;
  }
  generateDatasehratheat(count: number, yrange: { min: number; max: number }) {
    const series = [];
    for (let i = 0; i < count; i++) {
      const x = 'w' + (i + 1).toString();
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({ x, y });
    }
    return series;
  }
  generateDatasehrat(count: number, yrange: { min: number; max: number }) {
    const series = [];
    for (let i = 0; i < count; i++) {
      const x = (i + 1).toString();
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({ x, y });
    }
    return series;
  }
  ngOnInit(): void {
    this.getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
      min: 10,
      max: 90,
    });

    // Simulate adding new data periodically
    setInterval(
      () => this.getNewSeries(this.lastDate, { min: 10, max: 90 }),
      2000
    );
  }

  getDayWiseTimeSeries(
    baseval: number,
    count: number,
    yrange: { min: number; max: number }
  ): void {
    let i = 0;
    while (i < count) {
      const x = baseval;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      this.data.push({ x, y });
      this.lastDate = baseval;
      baseval += 86400000; // Increment by one day
      i++;
    }
  }

  getNewSeries(baseval: number, yrange: { min: number; max: number }): void {
    const newDate = baseval + 86400000; // Increment by one day
    this.lastDate = newDate;

    this.data.push({
      x: newDate,
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
    });

    if (this.data.length > 10) {
      this.data = this.data.slice(this.data.length - 10, this.data.length);
    }
  }
}
