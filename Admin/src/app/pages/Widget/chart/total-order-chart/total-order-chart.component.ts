import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-total-order-chart',
  standalone: true,
  imports: [],
  templateUrl: './total-order-chart.component.html',
  styleUrl: './total-order-chart.component.css'
})
export class TotalOrderChartComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const options = {
      chart: {
        type: 'area',
        height: 100,
        stacked: true,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#1DE9B6'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 40, 70, 50, 90, 50]
        }
      ]
    };

    const chart = new ApexCharts(document.querySelector('#total-order-chart'), options);
    chart.render();
  }
}

