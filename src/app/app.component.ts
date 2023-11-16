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

    <app-input [contador]="valueContador"></app-input>
    <button (click)="increment()">Incrementar contador</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit  {

  public valueContador: number = 0

  constructor() {
  }


  ngOnInit(): void {
  }

  public increment() {
    this.valueContador += 1
  }

}
