import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BagService } from './shared';
import { ListBagComponent } from './list';



@NgModule({
  declarations: [
    ListBagComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    BagService
  ]
})
export class BagModule { }
