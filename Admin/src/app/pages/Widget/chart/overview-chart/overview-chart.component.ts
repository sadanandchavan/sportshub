import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-overview-chart',
  standalone: true,
  imports: [],
  templateUrl: './overview-chart.component.html',
  styleUrl: './overview-chart.component.css',
})
export class OverviewChartComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const options = {
      chart: {
        type: 'line',
        height: 230,
        toolbar: {
          show: false,
        },
      },
      colors: ['#0d6efd', '#748892'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
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
          name: 'This month',
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65],
        },
        {
          name: 'Last month',
          data: [50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90],
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

    const chart = new ApexCharts(
      document.querySelector('#overview-chart-1'),
      options
    );
    chart.render();
  }
}
