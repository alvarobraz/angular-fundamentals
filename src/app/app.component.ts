import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais>
    <router-outlet></router-outlet>-->

    <!-- <app-diretivas-atributos>
      <h1>Diretivas</h1>
      <h3>Final da aula</h3>
    </app-diretivas-atributos>

    <app-diretivas-atributos>
      <h1>Diretivas 2</h1>
      <h3>Final da aula 2</h3>
    </app-diretivas-atributos>
    <router-outlet></router-outlet>-->

    <!-- <app-diretivas-atributos></app-diretivas-atributos>
    <router-outlet></router-outlet>-->

    <!-- <app-new-component></app-new-component>
    <router-outlet></router-outlet>-->

    <!-- <app-input [contador]="valueContador"></app-input>
    <button (click)="increment()">Incrementar contador</button>
    <router-outlet></router-outlet> -->

    <!-- <ng-template [ngIf]="getDados">
    <h1>{{ getDados.nome }}</h1>
    <h2>{{ getDados.idade }}</h2>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>
    <router-outlet></router-outlet>-->

    <!-- <app-food-add></app-food-add>
    <app-food-list></app-food-list>
    <router-outlet></router-outlet>-->

    <!-- <app-forms></app-forms>
    <router-outlet></router-outlet>-->

    <!-- <app-reactiveforms></app-reactiveforms>
    <router-outlet></router-outlet>-->

    <!-- <app-menu></app-menu>
    <router-outlet></router-outlet>-->

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
