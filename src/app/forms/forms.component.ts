import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public ListComidas: Array<{ comida: string, preco: string }> = [
    { comida: 'X-Salada', preco: '10.00' },
    { comida: 'X-Frango', preco: '15.00'  },
    { comida: 'X-Tudo', preco: '20.00'  },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
