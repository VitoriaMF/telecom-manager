import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusFaturaResponse } from '../../core/models/StatusFatura';
import { FaturaMensal } from '../../core/models/FaturaMensal';
import { Resumo } from '../../core/models/Resumo';

@Injectable({ providedIn: 'root' })
export class FaturaService {
  private readonly apiUrl = 'http://localhost:5045/api/Faturas/';

  constructor(private http: HttpClient) {}

  getFaturasPorStatus(): Observable<StatusFaturaResponse> {
    return this.http.get<StatusFaturaResponse>(this.apiUrl + 'faturas-por-status');
  }

  getEvolucaoMensal(): Observable<FaturaMensal[]> {
    return this.http.get<FaturaMensal[]>(this.apiUrl + 'evolucao-mensal');
  }

  getResumoFaturas(): Observable<Resumo> {
    return this.http.get<Resumo>(this.apiUrl + 'resumo');
  }
}