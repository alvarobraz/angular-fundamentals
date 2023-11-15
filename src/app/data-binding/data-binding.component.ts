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

  constructor() { }

  ngOnInit(): void {
  }

}
