import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-title title="Olá Desenvolvedor!"></app-title> -->
    {{valor}}
    <button (click)="adicionar()">Adicionar</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {


  public valor: number = 1;

  constructor() {
  }

  public adicionar(): number {
    return this.valor +=1
  }

  ngOnInit(): void {}

  // Implementação de DoCheck
  ngDoCheck(): void  {
    console.log('ngDoCheck executado');
  }

  // Implementação de AfterContentInit
  ngAfterContentInit(): void  {
    console.log('ngAfterContentInit executado');
  }

  // Implementação de AfterContentChecked
  ngAfterContentChecked(): void  {
    console.log('ngAfterContentChecked executado');
  }

  // Implementação de AfterViewInit
  ngAfterViewInit(): void  {
    console.log('ngAfterViewInit executado');
  }

  // Implementação de AfterViewChecked
  ngAfterViewChecked(): void  {
    console.log('ngAfterViewChecked executado');
  }

}
