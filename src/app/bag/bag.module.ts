import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ModalModule } from '../_modal/modal.module';

import { BagService } from './shared';
import { ListBagComponent } from './list';



@NgModule({
  declarations: [
    ListBagComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ModalModule,
    FontAwesomeModule
  ],
  providers: [
    BagService
  ]
})
export class BagModule { }
