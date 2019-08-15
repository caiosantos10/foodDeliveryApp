import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FoodService } from './shared';
import { ListFoodComponent } from './list';



@NgModule({
  declarations: [
    ListFoodComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    FoodService
  ]
})
export class FoodModule { }
