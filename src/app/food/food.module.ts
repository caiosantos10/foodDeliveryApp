import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FoodService } from './shared';
import { ListFoodComponent } from './list';
import { AddToBagComponent } from './add';



@NgModule({
  declarations: [
    ListFoodComponent,
    AddToBagComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule
    
  ],
  providers: [
    FoodService
  ]
})
export class FoodModule { }
