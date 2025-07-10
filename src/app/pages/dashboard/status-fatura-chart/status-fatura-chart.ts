import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { StatusChave, statusFatura, StatusFaturaResponse } from '../../../core/models/StatusFatura';
import { FaturaService } from '../fatura-service';

@Component({
  selector: 'app-status-fatura-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './status-fatura-chart.html',
  styleUrl: './status-fatura-chart.css'
})
export class StatusFaturaChart {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  chartType: ChartType = 'pie';

  chartData: ChartConfiguration['data'] = {
    labels: Object.values(statusFatura),
    datasets: [
      {
        data: [],
        backgroundColor: ['#66BB6A', '#FFA726', '#EF5350'],
        borderColor: ['#ffffff', '#ffffff', '#ffffff'],
        hoverOffset: 10,
      },
    ],
  };

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#333',
          font: { size: 14 },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.label}: ${tooltipItem.raw} faturas`,
        },
      },
    },
  };

  constructor(private faturaService: FaturaService) { }

  ngOnInit(): void {
    const keys: StatusChave[] = ['paga', 'pendente', 'atrasada'];

    this.faturaService.getFaturasPorStatus().subscribe((dados: StatusFaturaResponse) => {
      const valores = keys.map((chave) => dados[chave] ?? 0);
      this.chartData.datasets[0].data = valores;
      this.chart?.update();
    });
  }
}
