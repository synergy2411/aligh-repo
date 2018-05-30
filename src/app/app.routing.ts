import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { ObsDemoComponent } from './obs-demo/obs-demo.component';
import { FilterComponent } from './filter/filter.component';
import { ProductComponent } from './product/product.component';

export const APP_ROUTES : Routes = [
    {
       path : "",
       redirectTo : "product",
       pathMatch : "full"
    },{
        path :"product",
        component : ProductComponent
    },{
        path : 'login',
        component : SignupComponent
    },{
        path : 'obs-demo',
        component : ObsDemoComponent
    },{
        path : 'filter',
        component : FilterComponent
    },{
        path : "**",
        redirectTo : "product",
        pathMatch : 'full'
    }
]