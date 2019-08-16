import { Routes } from '@angular/router';

import { ListBagComponent } from './list';

export const BagRoutes: Routes = [
    {
        path: 'bag',
        redirectTo: 'bag/list'
    },
    {
        path: 'bag/list',
        component: ListBagComponent
    },
];