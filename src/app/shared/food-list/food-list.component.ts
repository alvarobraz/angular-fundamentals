import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/modules/food-list';

// Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      res => this.foodList = res,
      error => error
    );
    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`Você adicionou um item => ${JSON.stringify(res.name)}`);
        return this.foodList.push(res)
      }
    )
  }


  public foodListDelete(id: number) {
    return this.foodListService.foodListDelete(id).subscribe(
      // res => console.log(res),
      res => {
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error => error
    )
  }

  public foodListEdit(id: number, value: {name: string, price: string }) {
    this.foodListService.foodListEdit(id, value).subscribe(
      res => {
        return console.log(res)
      },
      error => error
    )
  }

}
