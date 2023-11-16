import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<{ name: string, price: number}> = [
    { name: 'X-Saladada', price: 10.00 },
    { name: 'X-Frango', price: 12.00 },
    { name: 'X-Bife', price: 15.00 }
  ]

  constructor() { }

  public foodList() {
    return this.list;
  }
}
