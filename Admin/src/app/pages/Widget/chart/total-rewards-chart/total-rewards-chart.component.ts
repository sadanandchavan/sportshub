import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-total-rewards-chart',
  standalone: true,
  imports: [],
  templateUrl: './total-rewards-chart.component.html',
  styleUrl: './total-rewards-chart.component.css'
})
export class TotalRewardsChartComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const options = {
      chart: {
        type: 'line',
        height: 100,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#F4C22B'],
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50] }]
    };

    const chart = new ApexCharts(document.querySelector('#total-rewards-chart'), options);
    chart.render();
  }
}
