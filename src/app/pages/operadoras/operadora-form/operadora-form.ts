import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Operadora } from '../../../core/models/Operadora';
import { ApiGenericService } from '../../../core/services/api-generic';
import { ActivatedRoute } from '@angular/router';
import { MatOption } from '@angular/material/autocomplete';
import { tiposArray } from '../../../core/models/TiposServicos';
import { MatSelect } from '@angular/material/select';

const API_URL = 'http://localhost:5045/api/Operadoras';

@Component({
  selector: 'app-operadora-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButton,
    MatOption,
    MatLabel,
    MatSelect,
    CommonModule
],
  templateUrl: './operadora-form.html',
  styleUrl: './operadora-form.css'
})
export class OperadoraForm {
  form: FormGroup;
  operadoraId?: string;
  tiposArray = tiposArray;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private api: ApiGenericService<Operadora>,
  ) {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      tipoServico: ['', Validators.required],
      contatoSuporte: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.operadoraId = this.route.snapshot.paramMap.get('id') ?? undefined;

    if (this.operadoraId) {
      this.api.buscarPorId(API_URL, this.operadoraId).subscribe(data => {
        this.form.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.snackBar.open('Preencha todos os campos obrigatórios.', 'Fechar', {
        duration: 3000,
      });
      return;
    }

    const dados: Operadora = this.form.value;

    if (this.operadoraId) {
      this.api.editar(API_URL, this.operadoraId, dados).subscribe(() => {
        this.snackBar.open('Operadora atualizada com sucesso!', 'Fechar', { duration: 3000 });
        this.location.back();
      });
    } else {
      this.api.adicionar(API_URL, dados).subscribe(() => {
        this.snackBar.open('Operadora cadastrada com sucesso!', 'Fechar', { duration: 3000 });
        this.form.reset();
        this.location.back();
      });
    }
  }

  onBack(): void {
    this.location.back();
  }
}