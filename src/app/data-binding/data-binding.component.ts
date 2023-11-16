import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent implements OnInit {

  public name: string = "Álvaro Braz";
  public birthDay: number = 40;

  public checkedDisabled: boolean =  false

  public imgTest: string = "https://avatars.githubusercontent.com/u/60791524?s=400&u=a8a72e1286d70c8013a290d58ae797b74929b89b&v=4"

  public imgTitle: string = "Foto de Álvaro Braz"

  public position: { x: number, y: number } = { x: 0, y:0 }

  constructor() { }

  ngOnInit(): void {
  }

  public alertInfo(valor: string) {
    alert(valor)
  }

  public alertInfo_a(valor: MouseEvent) {
    console.log(valor)
  }

  public MouseMove(valor: MouseEvent) {
    // console.log(valor)
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
