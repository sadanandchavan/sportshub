import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-timesspent-chart',
  standalone: true,
  imports: [],
  templateUrl: './timesspent-chart.component.html',
  styleUrl: './timesspent-chart.component.css',
})
export class TimesspentChartComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const options = {
      chart: {
        type: 'line',
        height: 40,
        stacked: true,
        sparkline: { enabled: true },
      },
      colors: ['#1DE9B6'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [5, 25, 3, 10, 4, 50, 0] }],
      tooltip: {
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName: string) {
              return '';
            },
          },
        },
        marker: { show: false },
      },
    };

    const chart = new ApexCharts(
      document.querySelector('#timesspent-chart'),
      options
    );
    chart.render();
  }
}
