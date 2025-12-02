import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-monthly-report-graph',
  standalone: true,
  imports: [],
  templateUrl: './monthly-report-graph.component.html',
  styleUrl: './monthly-report-graph.component.css'
})
export class MonthlyReportGraphComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const options = {
      series: [
        {
          name: 'Deals',
          data: [44, 55, 41, 67, 52, 53, 13]
        },
        {
          name: 'Income Report',
          data: [13, 3, 20, 8, 13, 27, 21]
        },
        {
          name: 'Customer',
          data: [11, 17, 15, 15, 21, 14, 11]
        },
        {
          name: 'Profits',
          data: [21, 7, 25, 13, 22, 3, 44]
        }
      ],
      chart: {
        type: 'bar',
        height: 250,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      colors: ['#04A9F5', '#04A9F5', '#04A9F5', '#7C57C1'],
      fill: {
        opacity: [0.6, 1,  0.6, 1]
      },
      grid: {
        strokeDashArray: 4
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      legend: {
        show: false
      }
    };

    const chart = new ApexCharts(document.querySelector('#monthly-report-graph'), options);
    chart.render();
  }
}

