import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Client } from './interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  /*pessoas = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'José', idade: 32 },
    { id: 4, nome: 'Pedro', idade: 42 },
    { id: 5, nome: 'Paulo', idade: 35 },
    { id: 6, nome: 'Lucas', idade: 25 },
  ]*/

  constructor(private http: HttpClient) { }

  cadastrar(client : Client): Observable<Client> {
    //const id = this.pessoas.length;
    return this.http.post<Client>('https://3.128.249.166:3000/clients', client);
  }

  obterPessoas(): Observable<Client[]> {
   return  this.http.get<Client[]>('https://3.128.249.166:3000/clients');
  }
}
