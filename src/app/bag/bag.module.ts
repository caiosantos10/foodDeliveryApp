import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BagService } from './shared';
import { ListBagComponent } from './list';



@NgModule({
  declarations: [
    ListBagComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    BagService
  ]
})
export class BagModule { }
