import { Component, OnInit } from '@angular/core';

// services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
  }

  public listAddItem(name: string, price: string) {
    console.log(name)
    console.log(price)
    return this.foodListService.foodListAdd( { name: name, price: price} )
  }

}
