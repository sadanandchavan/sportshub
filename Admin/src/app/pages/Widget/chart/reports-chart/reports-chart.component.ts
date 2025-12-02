import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-reports-chart',
  standalone: true,
  imports: [],
  templateUrl: './reports-chart.component.html',
  styleUrl: './reports-chart.component.css',
})
export class ReportsChartComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const options = {
      chart: {
        type: 'area',
        height: 250,
        toolbar: {
          show: false,
        },
      },
      colors: ['#1DE9B6', '#A389D4', '#0398F2'],
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          stops: [0, 100],
          shadeIntensity: 0.5,
          gradientToColors: ['#1DC4E9', '#899ED4', '#38B9E7'],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4,
        },
      },
      grid: {
        strokeDashArray: 4,
      },
      series: [
        {
          name: 'Tomorrow',
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65],
        },
        {
          name: 'Today',
          data: [50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90],
        },
        {
          name: 'Yesterday',
          data: [60, 50, 65, 30, 60, 40, 70, 50, 55, 45, 50, 90],
        },
      ],
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
          'Oct',
          'Nov',
          'Dec',
        ],
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

    const chart = new ApexCharts(
      document.querySelector('#reports-chart'),
      options
    );
    chart.render();
  }
}
