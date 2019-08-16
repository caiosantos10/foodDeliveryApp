import { Injectable } from '@angular/core';

import dataSample from './menu.json';
import { Food } from './food.model.js';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}

  getAll(): Array<Food> {
    console.log('service', 'getAll()');
    return dataSample;  
  }

  addToBag(food: Food): void {
    const bag = this.verififyBag();
    bag.push(food);
    localStorage['bag'] = JSON.stringify(bag);
  }

  verififyBag(): Food[] {
    const bag = localStorage['bag'];
    return bag ? JSON.parse(bag) : [];
  }

  
}
