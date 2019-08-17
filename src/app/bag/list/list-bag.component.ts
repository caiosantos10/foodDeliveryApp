import { Component, OnInit } from '@angular/core';

import { Food } from '../../food/shared/food.model';
import { BagService } from '../shared/bag.service';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-list-bag',
  templateUrl: './list-bag.component.html',
  styleUrls: ['./list-bag.component.scss']
})
export class ListBagComponent implements OnInit {

  foods: Food[];
  foodAux: Food;
  total = 0;
  amountAux = 0;
  
  constructor(private bagService: BagService) { }

  ngOnInit() {
    this.foods = this.getAll();
    this.foodAux = new Food("aux", "aux", -1, -1, "aux");
  }

  getAll(): Food[] {
    return this.bagService.getAll();
  }

  updateValue(e, food:Food){
    
    food.amount = e.target.value;
    
    if(this.foodAux.title == "aux"){ //first Food of the list
      this.total = food.price; 
    }
    else if (this.foodAux.title == food.title){ //current Food (food from argument)
      if(this.amountAux > food.amount){
        this.total -= food.price;
      }
      else {
        this.total += food.price;
      }
    }
    else{ //next Food
      this.amountAux = 0;
      this.total += food.price;
    }

    this.amountAux = food.amount;
    this.foodAux = food; 
  }

  remove(id: string): void{
    this.bagService.remove(id);
    location.reload();
  }

}
