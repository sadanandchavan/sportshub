import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-overview-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './overview-bar-chart.component.html',
  styleUrl: './overview-bar-chart.component.css',
})
export class OverviewBarChartComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const options = {
      chart: {
        type: 'bar',
        height: 150,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#F44236', '#04A9F5', '#673ab7', '#1DE9B6', '#F4C22B', '#3EBFEA'],
      plotOptions: {
        bar: {
          borderRadius: 2,
          columnWidth: '80%',
          distributed: true
        }
      },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50]
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

    const chart = new ApexCharts(document.querySelector('#overview-bar-chart'), options);
    chart.render();
  }
}
