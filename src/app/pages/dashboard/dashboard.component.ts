import { Component, OnInit } from '@angular/core';
// import { ChartConfiguration } from 'chart.js';



export interface Topcard {
  bgcolor: string,
  icon: string,
  title: string,
  subtitle: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topcardsConstantine: Topcard[] = [];
  // public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  // public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
  //     { data: [ 350, 450, 100 ], label: 'Series A' },
  //     { data: [ 50, 150, 120 ], label: 'Series B' },
  //     { data: [ 250, 130, 70 ], label: 'Series C' }
  //   ];

  // public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
  //   responsive: false
  // };
  constructor() { }

  ngOnInit(): void {
    this.getConstantineData()
  }

  getConstantineData() {
    this.topcardsConstantine.push({
      bgcolor: '#007bff',
      icon: 'business',
      title: '78,000',
      subtitle: ' Total Donation'
    },
      {
        bgcolor: '#ef5350',
        icon: 'timeline',
        title: '28',
        subtitle: 'Total Blogs'
      },
      {
        bgcolor: '#66bb6a',
        icon: 'warning',
        title: '8',
        subtitle: ' Events'
      },
      {
        bgcolor: '#26c6da',
        icon: 'business',
        title: '4',
        subtitle: 'Projects'
      },
      {
        bgcolor: '#26c6da',
        icon: 'cloud',
        title: '7',
        subtitle: 'Shopping'
      }
    )
  }
  public chartClicked(e: any): void {
  }
}
