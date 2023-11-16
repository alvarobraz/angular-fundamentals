import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true
  public cor: string = 'vermelha'
  public height: string = ''
  public name: string = ''

  public list: Array<{ name: string }> = []

  public date: Date = new Date()

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

  public changeHeightBackground() {
    if(this.height === '') {
      this.height = '50px'
    }
    else
    if(this.height === '50px') {
      this.height = '20px'
    }
    else {
      this.height = '50px'
    }
  }


  public salvar() {
    this.list.push({name: this.name})
    this.name = ''
  }


}
