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

  
}
