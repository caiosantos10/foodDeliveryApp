import { Injectable } from '@angular/core';
import { Food } from '../../food/shared/food.model';

@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor() { }

  getAll(): Food[] {
    const bag = localStorage['bag'];
    return bag ? JSON.parse(bag) : [];
  }
}
