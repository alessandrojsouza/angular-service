import { Component, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DadosService } from './dados.service';
import { FormsModule } from '@angular/forms';
import { Client } from './interfaces/client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    lista : Client[] = [];

    client : Client = {
      name: '',
      email: ''
      };

    constructor(private servico: DadosService) {}

    ngOnInit() {
      this.servico.obterPessoas().subscribe((data) => {
        this.lista = data;
      });
    }

    cadastrar() {
      this.servico.cadastrar(this.client).subscribe((data) => {
        this.lista.push(data);
      });
      //this.lista = this.servico.obterPessoas();
      this.client.name = '';
      this.client.email = '';
    }
}
