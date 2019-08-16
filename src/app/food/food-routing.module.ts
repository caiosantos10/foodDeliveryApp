import { Routes } from '@angular/router';

import { ListFoodComponent } from './list';

export const FoodRoutes: Routes = [
    {
        path: 'food',
        redirectTo: 'food/list' 
    },
    {
        path: 'food/list',
        component: ListFoodComponent
    },
];