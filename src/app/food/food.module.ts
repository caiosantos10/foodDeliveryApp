import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FoodService } from './shared';
import { ListFoodComponent } from './list';



@NgModule({
  declarations: [
    ListFoodComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule
    
  ],
  providers: [
    FoodService
  ]
})
export class FoodModule { }
