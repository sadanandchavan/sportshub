import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-total-earning-chart',
  standalone: true,
  imports: [],
  templateUrl: './total-earning-chart.component.html',
  styleUrl: './total-earning-chart.component.css',
})
export class TotalEarningChartComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    this.renderCharts();
  }

  renderCharts(): void {
    // Chart 1 options
    const options1 = {
      series: [30],
      chart: {
        height: 150,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '60%',
            background: 'transparent',
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
          },
          track: {
            background: '#F4C22B50',
            strokeWidth: '50%',
          },
          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              formatter: (val: number) => parseInt(val.toString(), 10),
              offsetY: 7,
              color: '#F4C22B',
              fontSize: '20px',
              fontWeight: '700',
              show: true,
            },
          },
        },
      },
      colors: ['#F4C22B'],
      fill: {
        type: 'solid',
      },
      stroke: {
        lineCap: 'round',
      },
    };

    // Chart 2 options
    const options2 = {
      series: [30],
      chart: {
        height: 150,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '60%',
            background: 'transparent',
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
          },
          track: {
            background: '#1DE9B650',
            strokeWidth: '50%',
          },
          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              formatter: (val: number) => parseInt(val.toString(), 10),
              offsetY: 7,
              color: '#1DE9B6',
              fontSize: '20px',
              fontWeight: '700',
              show: true,
            },
          },
        },
      },
      colors: ['#1DE9B6'],
      fill: {
        type: 'solid',
      },
      stroke: {
        lineCap: 'round',
      },
    };

    // Initialize and render Chart 1
    const chart1 = new ApexCharts(
      document.querySelector('#total-earning-chart-1') as HTMLElement,
      options1
    );
    chart1.render();

    // Initialize and render Chart 2
    const chart2 = new ApexCharts(
      document.querySelector('#total-earning-chart-2') as HTMLElement,
      options2
    );
    chart2.render();
  }
}
