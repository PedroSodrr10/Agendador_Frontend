import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Contatos } from '../models/contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
baseUrl: String = "http://localhost:8080/api/Agendador";

  constructor(
    private http : HttpClient,
    private snack: MatSnackBar) { }

    listarTodos():Observable<Contatos[]> {
      const url = this.baseUrl + "/contatos";
      return this.http.get<Contatos[]>(url);
    }
}
