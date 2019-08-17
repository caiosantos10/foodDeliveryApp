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

  remove(id: string): void {
    let bag: Food[] = this.getAll();
    bag = bag.filter(food => food.id !== id);
    localStorage['bag'] = JSON.stringify(bag);
  }
}
