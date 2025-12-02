import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../layouts/breadcrumb/breadcrumb.component';
import { CustomerRateGraphComponent } from './customer-rate-graph/customer-rate-graph.component';
import { MonthlyReportGraphComponent } from './monthly-report-graph/monthly-report-graph.component';
import { YearlySummaryChartComponent } from './yearly-summary-chart/yearly-summary-chart.component';
import { OverviewChartComponent } from './overview-chart/overview-chart.component';
import { CommonModule } from '@angular/common';
import { TotalSalesChartComponent } from './total-sales-chart/total-sales-chart.component';
import { PerformanceChartComponent } from './performance-chart/performance-chart.component';
import { OverviewBarChartComponent } from './overview-bar-chart/overview-bar-chart.component';
import { ProjectRatingChartComponent } from './project-rating-chart/project-rating-chart.component';
import { TransactionsChartComponent } from './transactions-chart/transactions-chart.component';
import { CanceledOrderChartComponent } from './canceled-order-chart/canceled-order-chart.component';
import { TotalOrderChartComponent } from './total-order-chart/total-order-chart.component';
import { ReportsChartComponent } from './reports-chart/reports-chart.component';
import { TimesspentChartComponent } from './timesspent-chart/timesspent-chart.component';
import { NewVisitorChartComponent } from './new-visitor-chart/new-visitor-chart.component';
import { TotalRewardsChartComponent } from './total-rewards-chart/total-rewards-chart.component';
import { TotalRewardsChartTwoComponent } from './total-rewards-chart-two/total-rewards-chart-two.component';
import { BitcoinChartComponent } from './bitcoin-chart/bitcoin-chart.component';
import { TotalEarningChartComponent } from './total-earning-chart/total-earning-chart.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    CustomerRateGraphComponent,
    MonthlyReportGraphComponent,
    YearlySummaryChartComponent,
    OverviewChartComponent,
    TotalSalesChartComponent,
    PerformanceChartComponent,
    OverviewBarChartComponent,
    ProjectRatingChartComponent,
    TransactionsChartComponent,
    CanceledOrderChartComponent,
    TotalOrderChartComponent,
    ReportsChartComponent,
    TimesspentChartComponent,
    NewVisitorChartComponent,
    TotalRewardsChartComponent,
    TotalRewardsChartTwoComponent,
    BitcoinChartComponent,
    TotalEarningChartComponent,
    NgbTooltipModule,
  ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  activeTab: 'daily' | 'monthly' = 'daily';

  setActiveTab(tab: 'daily' | 'monthly'): void {
    this.activeTab = tab;
  }
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
          data: [70, 50, 90, 50, 55, 45, 30, 60, 40, 60, 50, 65],
        },
        {
          name: 'Last month',
          data: [50, 65, 30, 60, 40, 50, 55, 45, 60, 70, 50, 90],
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
      document.querySelector('#overview-chart-2'),
      options
    );
    chart.render();
  }
}
