import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html'
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true

  public conditionClick: boolean = true

  public list: Array<{ nome: string }> = [
    { nome: "Álvaro Braz" },
    { nome: "Arthur Máximus da Cruz Braz" },
    { nome: "Cristine Schio" }
  ]

  constructor() { }

  ngOnInit(): void {

    setInterval(()=> {

      if(this.condition) {
        this.condition = false
      }
      else {
        this.condition = true
      }

    }, 2000)

  }

  public onClick() {
    if(this.conditionClick) {
      this.conditionClick = false
    }
    else {
      this.conditionClick = true
    }
  }

  public onClickAddList() {
    this.list.push({ nome: "Rosangela Braz" })
  }

  // public onClickEventList(event: MouseEvent) {
  //   console.log(event)
  // }
  public onClickEventList(event: number) {
    console.log(event)
    this.list.splice(event, 1)
  }

}
