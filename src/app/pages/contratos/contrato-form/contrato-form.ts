import { Component } from '@angular/core';
import { Contrato } from '../../../core/models/Contrato';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiGenericService } from '../../../core/services/api-generic';
import { statusContratoArray } from '../../../core/models/StatusContrato';
import { CommonModule, Location } from '@angular/common';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const API_URL = 'http://localhost:5045/api/Contratos';

@Component({
  selector: 'app-contrato-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOption,
    MatLabel,
    MatSelect,
    MatDatepickerModule,
    CommonModule,
    MatNativeDateModule
  ],
  templateUrl: './contrato-form.html',
  styleUrl: './contrato-form.css'
})
export class ContratoForm {
  form: FormGroup;
  contratoId?: string;
  tiposArray = statusContratoArray;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private api: ApiGenericService<Contrato>,
  ) {
    this.form = this.formBuilder.group({
      nomeFilial: ['', Validators.required],
      operadoraId: ['', Validators.required],
      planoContratado: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataVencimento: ['', Validators.required],
      valorMensal: ['', [Validators.required, Validators.min(0)]],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.contratoId = this.route.snapshot.paramMap.get('id') ?? undefined;

    if (this.contratoId) {
      this.api.buscarPorId(API_URL, this.contratoId).subscribe(data => {
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

    const dados: Contrato = this.form.value;

    if (this.contratoId) {
      this.api.editar(API_URL, this.contratoId, dados).subscribe(() => {
        this.snackBar.open('Fatura atualizada com sucesso!', 'Fechar', { duration: 3000 });
        this.location.back();
      });
    } else {
      this.api.adicionar(API_URL, dados).subscribe(() => {
        this.snackBar.open('Fatura cadastrada com sucesso!', 'Fechar', { duration: 3000 });
        this.form.reset();
        this.location.back();
      });
    }
  }

  onBack(): void {
    this.location.back();
  }
}
