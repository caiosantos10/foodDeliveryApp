import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodService } from './shared';
import { ListFoodComponent } from './list';



@NgModule({
  declarations: [
    ListFoodComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FoodService
  ]
})
export class FoodModule { }
