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

  foods: Food[];

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.getAll();
    //this.getAllPizzas();
  }

  getAll(): void {
    this.foods = [];
    this.foods = this.foodService.getAll();
  }

  getAllPizza(): void {
    this.foods = [];
    this.foodService.getAll().forEach(element => {
      if(element.cuisine == 'pizza'){
        this.foods.push(element);
      }
    });
  }

  getAllCake(): void {
    this.foods = [];
    this.foodService.getAll().forEach(element => {
      if(element.cuisine == 'cake'){
        this.foods.push(element);
      }
    });
  }

  getAllBurgers(): void {
    this.foods = [];
    this.foodService.getAll().forEach(element => {
      if(element.cuisine == 'burgers'){
        this.foods.push(element);
      }
    });
  }

  getAllBeverage(): void {
    this.foods = [];
    this.foodService.getAll().forEach(element => {
      if(element.cuisine == 'beverage'){
        this.foods.push(element);
      }
    });
  }

  getAllSalad(): void {
    this.foods = [];
    this.foodService.getAll().forEach(element => {
      if(element.cuisine == 'salad'){
        this.foods.push(element);
      }
    });
  }

  getAllChinese(): void {
    this.foods = [];
    this.foodService.getAll().forEach(element => {
      if(element.cuisine == 'chinese'){
        this.foods.push(element);
      }
    });
  }
}
