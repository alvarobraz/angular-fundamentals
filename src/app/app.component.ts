import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-title title="Olá Desenvolvedor!"></app-title> -->
    <!-- {{valor}}
    <button (click)="adicionar()">Adicionar</button> -->
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponent()">{{buttonTitle}}</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  // public valor: number = 1;

  public buttonTitle: string =  ""

  public destruir: boolean = true;

  constructor() {
  }

  // public adicionar(): number {
  //   return this.valor +=1
  // }

  ngOnInit(): void {
    this.buttonTitle = "Ocultar componente"
  }

  public destruirComponent() {
    this.destruir = !this.destruir
  }

  // Implementação de DoCheck
  ngDoCheck(): void  {
    console.log('ngDoCheck executado');
    console.log(this.destruir)
    if(this.destruir === false) {
      this.buttonTitle = "Revelar componente"
    }
    else {
      this.buttonTitle = "Ocultar componente"
    }
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

  // Implementação de ngOnDestroy
  ngOnDestroy(): void {
    console.log('ngOnDestroy executado');
  }

}
