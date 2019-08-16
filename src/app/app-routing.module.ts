import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodRoutes } from './food';
import { BagRoutes } from './bag';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/food/list',
    pathMatch:'full'
  },
  ...FoodRoutes,
  
  ...BagRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
