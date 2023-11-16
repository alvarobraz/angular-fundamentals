import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter()

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Álvaro Braz", idade: 40 },
    { nome: "Arthur Máximus da Cruz Braz", idade: 9 },
    { nome: "Cristine Schio", idade: 38 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number) {
    console.log(this.list[event])
    this.enviarDados.emit(this.list[event])
  }

}
