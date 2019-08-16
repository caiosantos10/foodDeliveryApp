import { Component, OnInit } from '@angular/core';

import { Food } from '../../food/shared/food.model';
import { BagService } from '../shared/bag.service';

@Component({
  selector: 'app-list-bag',
  templateUrl: './list-bag.component.html',
  styleUrls: ['./list-bag.component.scss']
})
export class ListBagComponent implements OnInit {

  foods: Food[];

  constructor(private bagService: BagService) { }

  ngOnInit() {
    this.foods = this.getAll();
    console.log(this.foods); 
  }

  getAll(): Food[] {
    //console.log('bag-component', this.bagService.getAll());
    return this.bagService.getAll();
  }

}
