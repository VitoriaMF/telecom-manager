import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiGenericService } from '../../core/services/api-generic';
import { Fatura } from '../../core/models/Fatura';
import { statusFatura } from '../../core/models/StatusFatura';

const API_URL = 'http://localhost:5045/api/Faturas';

@Component({
  selector: 'app-faturas',
  imports: [
    CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatDialogModule
  ],
  templateUrl: './faturas.html',
  styleUrl: './faturas.css'
})
export class Faturas implements OnInit {
  displayedColumns: string[] = ['contratoId', 'dataEmissao', 'dataVencimento', 'valorCobrado', 'status', 'acoes'];
  faturas: Fatura[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiGenericService<Fatura>,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.api.listar(API_URL).subscribe(data => {
      this.faturas = data;
      this.cdr.detectChanges();
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(fatura: Fatura) {
    this.router.navigate(['edit', fatura.id], { relativeTo: this.route });
  }

  removerFatura(id: string) {
    this.api.remover(API_URL, id).subscribe(() => {
      this.faturas = this.faturas.filter(o => o.id !== id);
      this.cdr.detectChanges();
    });
  }

  getStatusFatura(tipo: number): string {
    return statusFatura[tipo as keyof typeof statusFatura] || 'Desconhecido';
  }
}
