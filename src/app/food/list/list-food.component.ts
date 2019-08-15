import { Component, OnInit } from '@angular/core';

import{ FoodService, Food } from '../shared';

import dataSample from './menu.json';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss']
})
export class ListFoodComponent  {

  foods: any = dataSample;

}
