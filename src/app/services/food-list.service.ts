import { FoodList } from './../modules/food-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<{ name: string, price: string }> = [
    { name: 'X-Saladada', price: '10.00' },
    { name: 'X-Frango', price: '12.00' },
    { name: 'X-Bife', price: '15.00' }
  ]

  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      Autorization: 'Beare asfafasdfasdfasdf'
    })
  }

  private url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  // public foodList() {
  //   return this.list;
  // }

  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    )
  }


  // public foodListAdd(value: {name: string, price: string }) {
  //   this.foodListAlert(value)
  //   return this.list.push(value)
  // }

  public foodListAdd(value: {name: string, price: string }): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}list-food`, { name: value.name, price: value.price }).pipe(
      res => res,
      error => error
    )
  }

  public foodListEdit(id: number, value: {name: string, price: string }): Observable<FoodList> {
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, { name: value.name, price: value.price }, this.httpOptions).pipe(
      res => res,
      error => error
    )
  }

  public foodListDelete(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
      res => res,
      error => error
    )
  }

  public foodListAlert(value: {name: string, price: string }) {
    return this.emitEvent.emit(value)
  }
}
