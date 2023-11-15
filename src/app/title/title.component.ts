import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title: string = "Bem vindo!"

  constructor() { }

  ngOnInit(): void {
  }

  // Caso title seja alterado este ngOnChanges é acionado!
  ngOnChanges(): void {
    console.log('Alteração realizada com sucesso!')
  }

}
