import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-data-binding></app-data-binding>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit  {


  // public valor: number = 1;

  // public buttonTitle: string =  ""

  // public destruir: boolean = true;

  constructor() {
  }

  // public adicionar(): number {
  //   return this.valor +=1
  // }

  ngOnInit(): void {
    // this.buttonTitle = "Ocultar componente"
  }



}
