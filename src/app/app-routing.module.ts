import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodRoutes } from './food';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/food/list',
    pathMatch:'full'
  },
  ...FoodRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
