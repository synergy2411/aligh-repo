import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { ObsDemoComponent } from './obs-demo/obs-demo.component';
import { FilterComponent } from './filter/filter.component';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { EmployeeComponent } from './employee/employee.component';

export const APP_ROUTES : Routes = [
    {
       path : "",
       redirectTo : "product",
       pathMatch : "full"
    },{
        path : "employee",
        component : EmployeeComponent
    },{
        path : "lazy",
        loadChildren : 'app/lazy/lazy.module#LazyModule'
    },{
        path :"product",
        component : ProductComponent,
        children : [{
                path : "",
                component : OverviewComponent
            },{
                path : "spec/:id/:name",
                component : SpecificationComponent
            }
        ]
    },{
        path : 'login',
        component : SignupComponent
    },{
        path : 'obs-demo',
        component : ObsDemoComponent
    },{
        path : 'filter',
        component : FilterComponent,
        canActivate : [LoginGaurdService] 
    },{
        path : "**",
        redirectTo : "product",
        pathMatch : 'full'
    }
]