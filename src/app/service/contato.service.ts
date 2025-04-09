import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Contatos } from '../models/contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  baseUrl: string = "http://localhost:8080/api/contatos";


  constructor(
    private http : HttpClient,
    private snack: MatSnackBar) { }

    listarTodos(page: number, size: number): Observable<any> {
      const url = `${this.baseUrl}?page=${page}&size=${size}`;
      return this.http.get<any>(url);
    }

    salvar(contato: any): Observable<Contatos> {
      return this.http.post<Contatos>(this.baseUrl, contato);
    }
}
