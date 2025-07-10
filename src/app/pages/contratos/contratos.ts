import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrato } from '../../core/models/Contrato';
import { ApiGenericService } from '../../core/services/api-generic';
import { statusContrato } from '../../core/models/StatusContrato';

const API_URL = 'http://localhost:5045/api/Contratos';

@Component({
  selector: 'app-contratos',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './contratos.html',
  styleUrl: './contratos.css'
})
export class Contratos {
  displayedColumns: string[] = ['nomeFilial', 'operadoraId', 'planoContratado', 'dataInicio', 'dataVencimento', 'valorMensal', 'status', 'acoes'];
  contratos: Contrato[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiGenericService<Contrato>,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.api.listar(API_URL).subscribe(data => {
      this.contratos = data;
      this.cdr.detectChanges();
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(fatura: Contrato) {
    this.router.navigate(['edit', fatura.id], { relativeTo: this.route });
  }

  removerFatura(id: string) {
    this.api.remover(API_URL, id).subscribe(() => {
      this.contratos = this.contratos.filter(o => o.id !== id);
      this.cdr.detectChanges();
    });
  }

  getStatusContrato(tipo: number): string {
    return statusContrato[tipo as keyof typeof statusContrato] || 'Desconhecido';
  }
}
