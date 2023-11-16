import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true
  public cor: string = 'vermelha'

  constructor() { }

  ngOnInit(): void {
  }

  public changeBackground() {
    if(this.valor === true) {
      this.valor = false
      this.cor = 'azul'
    }
    else {
      this.valor = true
      this.cor = 'vermelha'
    }
  }

}
