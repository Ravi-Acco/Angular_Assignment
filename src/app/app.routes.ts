import { Routes } from '@angular/router';
import { Comp1Component } from './MyComponents/comp1/comp1.component';
import { Comp3Component } from './MyComponents/comp3/comp3.component';
import { Comp2Component } from './MyComponents/comp2/comp2.component';

export const routes: Routes = [
    {
        path: 'home',
        component:Comp1Component
    },
    {
        path: 'userCard',
        component:Comp2Component
    },
    {
        path: 'userDetails/:id',
        component:Comp3Component
    },
    {
        path: '',
        component:Comp1Component
    }
];
