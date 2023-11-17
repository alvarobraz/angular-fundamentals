import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <!-- <app-diretivas-atributos>
      <h1>Diretivas</h1>
      <h3>Final da aula</h3>
    </app-diretivas-atributos>

    <app-diretivas-atributos>
      <h1>Diretivas 2</h1>
      <h3>Final da aula 2</h3>
    </app-diretivas-atributos> -->
    <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
    <!-- <app-new-component></app-new-component> -->

    <!-- <app-input [contador]="valueContador"></app-input>
    <button (click)="increment()">Incrementar contador</button>
    <router-outlet></router-outlet> -->
    <!-- <ng-template [ngIf]="getDados">
    <h1>{{ getDados.nome }}</h1>
    <h2>{{ getDados.idade }}</h2>
   </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output> -->

    <!-- <app-food-add></app-food-add>
    <app-food-list></app-food-list> -->

    <!-- <app-forms></app-forms> -->

    <!-- <app-reactiveforms></app-reactiveforms> -->
    <app-menu></app-menu>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit  {

  public valueContador: number = 0

  public getDados: { nome: string, idade: number } | undefined

  constructor() {
  }


  ngOnInit(): void {
  }

  public increment() {
    this.valueContador += 1
  }

  public setDados(event: { nome: string, idade: number }) {
    this.getDados = event;
  }

}
