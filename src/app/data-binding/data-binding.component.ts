import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent implements OnInit {

  public name: string = "Álvaro Braz";
  public birthDay: number = 40;

  constructor() { }

  ngOnInit(): void {
  }

}
