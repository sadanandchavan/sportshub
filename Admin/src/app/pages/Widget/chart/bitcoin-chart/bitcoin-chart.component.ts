import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-bitcoin-chart',
  standalone: true,
  imports: [],
  templateUrl: './bitcoin-chart.component.html',
  styleUrl: './bitcoin-chart.component.css'
})
export class BitcoinChartComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    this.renderCharts();
  }

  renderCharts(): void {
    // Chart 1 options
    const options1 = {
      chart: {
        type: 'line',
        height: 40,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#1DE9B6'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [5, 25, 3, 10, 4, 50, 0] }],
      tooltip: {
        x: { show: false },
        y: {
          title: {
            formatter: (seriesName: string) => ''
          }
        },
        marker: { show: false }
      }
    };

    // Chart 2 options
    const options2 = {
      chart: {
        type: 'line',
        height: 40,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#F44236'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [0, 50, 4, 10, 3, 25, 5] }],
      tooltip: {
        x: { show: false },
        y: {
          title: {
            formatter: (seriesName: string) => ''
          }
        },
        marker: { show: false }
      }
    };

    // Chart 3 options
    const options3 = {
      chart: {
        type: 'line',
        height: 40,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#04A9F5'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [5, 25, 3, 10, 4, 50, 0] }],
      tooltip: {
        x: { show: false },
        y: {
          title: {
            formatter: (seriesName: string) => ''
          }
        },
        marker: { show: false }
      }
    };

    // Initialize and render Chart 1
    const chart1 = new ApexCharts(document.querySelector('#bitcoin-chart-1'), options1);
    chart1.render();

    // Initialize and render Chart 2
    const chart2 = new ApexCharts(document.querySelector('#bitcoin-chart-2'), options2);
    chart2.render();

    // Initialize and render Chart 3
    const chart3 = new ApexCharts(document.querySelector('#bitcoin-chart-3'), options3);
    chart3.render();
  }
}
