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
    <app-new-component></app-new-component>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit  {

  constructor() {
  }


  ngOnInit(): void {
  }

}
