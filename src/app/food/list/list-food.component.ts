import { Component, OnInit } from '@angular/core';

import{ FoodService, Food } from '../shared';


@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss']
})
export class ListFoodComponent implements OnInit {

  foods: Array<any>;

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.foods = this.foodService.getAll();
  }
}
