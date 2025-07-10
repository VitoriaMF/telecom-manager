import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { EvolucaoMensalChart } from "./evolucao-mensal-chart/evolucao-mensal-chart";
import { StatusFaturaChart } from "./status-fatura-chart/status-fatura-chart";
import { FaturaService } from './fatura-service';
import { Resumo } from '../../core/models/Resumo';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, EvolucaoMensalChart, StatusFaturaChart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  resumo: Resumo = {
    totalEmitido: 0,
    totalFaturado: 0
  };

  constructor(
    private faturaService: FaturaService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.faturaService.getResumoFaturas().subscribe(data => {
      this.resumo = data;
      this.cdr.detectChanges();
    });
  }

}