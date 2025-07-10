import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FaturaService } from '../fatura-service';
import { FaturaMensal } from '../../../core/models/FaturaMensal';

@Component({
  selector: 'app-evolucao-mensal-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective, MatCardModule],
  templateUrl: './evolucao-mensal-chart.html',
  styleUrl: './evolucao-mensal-chart.css',
})
export class EvolucaoMensalChart implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  chartType: ChartType = 'bar';
  isLoaded = false;

  chartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Faturas Emitidas',
        data: [],
        backgroundColor: '#42A5F5',
      },
      {
        label: 'Faturas Pagas',
        data: [],
        backgroundColor: '#66BB6A',
      },
    ],
  };

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: { size: 13 },
          color: '#333',
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#555', font: { size: 12 } },
      },
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1, color: '#555' },
        grid: { color: '#eee' },
      },
    },
  };

  constructor(private faturaService: FaturaService) {}

  ngOnInit(): void {
    this.faturaService.getEvolucaoMensal().subscribe((dados: FaturaMensal[]) => {
      const meses = dados.map((item) => item.mes);
      const emitidas = dados.map((item) => item.emitidas);
      const pagas = dados.map((item) => item.pagas);

      this.chartData.labels = meses;
      this.chartData.datasets[0].data = emitidas;
      this.chartData.datasets[1].data = pagas;

      this.isLoaded = true;
      this.chart?.update();
    });
  }
}