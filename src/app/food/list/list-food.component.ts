import { Component, OnInit } from '@angular/core';

import{ FoodService, Food } from '../shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss']
})
export class ListFoodComponent implements OnInit {

  foods: Observable<Food[]>;

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.foods = this.listAllFood();     
  }

  listAllFood(): Observable<any> {
    return this.foodService.getAll();
  }


}
