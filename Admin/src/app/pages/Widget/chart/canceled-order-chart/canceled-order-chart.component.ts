import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-canceled-order-chart',
  standalone: true,
  imports: [],
  templateUrl: './canceled-order-chart.component.html',
  styleUrl: './canceled-order-chart.component.css'
})
export class CanceledOrderChartComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const options = {
      chart: {
        type: 'line',
        height: 60,
        stacked: true,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#F44236'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          data: [0, 50, 4, 10, 3, 25, 5]
        }
      ],
      tooltip: {
        x: {
          show: false
        },
        y: {
          title: {
            formatter: (seriesName: string) => ''  // Explicit type for seriesName
          }
        },
        marker: {
          show: false
        }
      }
    };

    const chart = new ApexCharts(document.querySelector('#canceled-order-chart'), options);
    chart.render();
  }
}

