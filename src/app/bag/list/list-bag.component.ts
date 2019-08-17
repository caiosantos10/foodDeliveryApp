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
  previously = [];
  
  constructor(private bagService: BagService) { }

  ngOnInit() {
    this.foods = this.getAll();
    this.foodAux = new Food("aux", "aux", -1, -1, "aux");
  }

  getAll(): Food[] {
    return this.bagService.getAll();
  }

  updateValue(e, food:Food){
    
    //food.amount = e.target.value;
    
    if(this.foodAux.title == "aux"){ //first Food of the list
      food.amount = e.target.value;
      this.total = food.price; 
      
    }
    else if (this.foodAux.title == food.title){ //current Food (food from argument)
      food.amount = e.target.value;
      if(this.amountAux > food.amount){
        this.total -= food.price;
        
      }
      else {
        this.total += food.price;
       
      }
    }
    else{ //next or previously Food 
      if (this.previously.includes(food.title)){
        console.log("visited");
        if(e.target.value < food.amount){
          this.total -= food.price;
          food.amount--;
        }
        else{
          this.total += food.price;
          food.amount++; 
        }
      }
      else{
        food.amount = e.target.value;
        this.amountAux = 0;
        this.total += food.price;
    }
      
    }

    this.amountAux = food.amount;
    this.foodAux = food;
    this.previously.push(food.title); 
  }

  remove(id: string): void{
    if(confirm("Want to delete?")){
      this.bagService.remove(id);
      location.reload();
    }
  }

  truncate(number, digits): number {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum/multiplier;
  }

  checkOutClick(): void {
    localStorage['bag'] = JSON.stringify(this.foods);
  }

}
