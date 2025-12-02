import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-project-rating-chart',
  standalone: true,
  imports: [],
  templateUrl: './project-rating-chart.component.html',
  styleUrl: './project-rating-chart.component.css'
})
export class ProjectRatingChartComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const options = {
      chart: {
        type: 'bar',
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#1DE9B6'],
      plotOptions: {
        bar: {
          borderRadius: 2,
          columnWidth: '80%'
        }
      },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
        }
      ],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
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

    const chart = new ApexCharts(document.querySelector('#project-rating-chart'), options);
    chart.render();
  }
}

