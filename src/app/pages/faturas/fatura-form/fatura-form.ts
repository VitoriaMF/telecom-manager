import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ApiGenericService } from '../../../core/services/api-generic';
import { Fatura } from '../../../core/models/Fatura';
import { statusFaturaArray } from '../../../core/models/StatusFatura';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const API_URL = 'http://localhost:5045/api/Faturas';

@Component({
  selector: 'app-fatura-form',
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
  templateUrl: './fatura-form.html',
  styleUrl: './fatura-form.css'
})
export class FaturaForm {
  form: FormGroup;
  faturaId?: string;
  tiposArray = statusFaturaArray;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private api: ApiGenericService<Fatura>,
  ) {
    this.form = this.formBuilder.group({
      contratoId: ['', Validators.required],
      dataEmissao: ['', Validators.required],
      dataVencimento: ['', Validators.required],
      valorCobrado: ['', [Validators.required, Validators.min(0)]],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.faturaId = this.route.snapshot.paramMap.get('id') ?? undefined;

    if (this.faturaId) {
      this.api.buscarPorId(API_URL, this.faturaId).subscribe(data => {
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

    const dados: Fatura = this.form.value;

    if (this.faturaId) {
      this.api.editar(API_URL, this.faturaId, dados).subscribe(() => {
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