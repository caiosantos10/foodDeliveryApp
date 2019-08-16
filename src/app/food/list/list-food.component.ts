import { Component, OnInit } from '@angular/core';

import{ FoodService, Food } from '../shared';
import { faPizzaSlice, faBirthdayCake, faHamburger, faGlassMartini, faLeaf, faDotCircle, faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss']
})
export class ListFoodComponent implements OnInit {
  pizza = faPizzaSlice;
  cake = faBirthdayCake;
  hamburguer = faHamburger;
  beverage = faGlassMartini;
  salad = faLeaf;
  chinese = faDotCircle;
  all = faBars;

  foods: Array<any>;

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.foods = this.foodService.getAll();
  }
}
