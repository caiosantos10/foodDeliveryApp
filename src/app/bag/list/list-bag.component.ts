import { Component, OnInit } from '@angular/core';

import { Food } from '../../food/shared/food.model';
import { BagService } from '../shared/bag.service';
import { componentFactoryName } from '@angular/compiler';
import { ModalService } from 'src/app/_modal';
import { RouterLinkWithHref } from '@angular/router';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list-bag',
  templateUrl: './list-bag.component.html',
  styleUrls: ['./list-bag.component.scss']
})
export class ListBagComponent implements OnInit {

  foods: Food[];
  
  total = 0;
  
  constructor(private bagService: BagService, private modalService: ModalService) { }

  ngOnInit() {
    this.foods = this.getAll();
    this.foods.forEach(food =>{
      food.amount = 0;
    });
    
  }

  plusClick(food: Food): void {
    food.amount ++;
    this.total += food.price;
  }

  minusClick(food: Food): void {
    if(food.amount == 0){

    } else {
      food.amount --;
      this.total -= food.price;
    }
  }

  getAll(): Food[] {
    return this.bagService.getAll();
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

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

  confirm(id: string): void {
    alert("Success!");
    localStorage.clear();
    this.closeModal(id);
    
  }

}
