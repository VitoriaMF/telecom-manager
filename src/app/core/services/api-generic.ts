import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGenericService<T> {
  constructor(private http: HttpClient) { }

  listar(apiUrl: string): Observable<T[]> {
    return this.http.get<T[]>(apiUrl);
  }

  buscarPorId(apiUrl: string, id: string): Observable<T> {
    return this.http.get<T>(`${apiUrl}/${id}`);
  }

  adicionar(apiUrl: string, item: Omit<T, 'id'>): Observable<T> {
    return this.http.post<T>(apiUrl, item);
  }

  remover(apiUrl: string, id: string): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/${id}`);
  }

  editar(apiUrl: string, id: string, item: Omit<T, 'id'>): Observable<T> {
    return this.http.put<T>(`${apiUrl}/${id}`, item);
  }
}