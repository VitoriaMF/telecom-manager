import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { Operadora } from '../../core/models/Operadora';
import { ApiGenericService } from '../../core/services/api-generic';
import { tipos } from '../../core/models/TiposServicos';
import { ActivatedRoute, Router } from '@angular/router';

const API_URL = 'http://localhost:5045/api/Operadoras';

@Component({
  selector: 'app-operadoras',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './operadoras.html',
  styleUrl: './operadoras.css'
})
export class Operadoras implements OnInit {
  displayedColumns: string[] = ['nome', 'tipo', 'contato', 'acoes'];
  operadoras: Operadora[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiGenericService<Operadora>,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.api.listar(API_URL).subscribe(data => {
      this.operadoras = data;
      this.cdr.detectChanges();
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(operadora: Operadora) {
    this.router.navigate(['edit', operadora.id], { relativeTo: this.route });
  }

  removerOperadora(id: string) {
    this.api.remover(API_URL, id).subscribe(() => {
      this.operadoras = this.operadoras.filter(o => o.id !== id);
      this.cdr.detectChanges();
    });
  }

  getTipoServico(tipo: number): string {
    return tipos[tipo as keyof typeof tipos] || 'Desconhecido';
  }
}