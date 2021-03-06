import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './directives/highlight-directive';
import { UnlessDirective } from './directives/unless.directive';
import { NationalCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterComponent } from './filter/filter.component';
import { CommentFormComponent } from './user/comment-form/comment-form.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DataService } from './services/data-service';
import { ObsDemoComponent } from './obs-demo/obs-demo.component';
import { AuthInterceptor } from './services/auth-interceptor';
import { AuthService } from './services/auth-service';
import { ProductComponent } from './product/product.component';
import { APP_ROUTES } from './app.routing';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { LoginGaurdService } from './services/login-gaurd.service';

@NgModule({
  declarations: [   //Components, Pipes & Directives
    AppComponent,
    UserComponent,
    HighlightDirective,
    UnlessDirective,
    NationalCodePipe,
    FilterPipe,
    FilterComponent,
    CommentFormComponent,
    SignupComponent,
    ObsDemoComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent
  ],
  imports: [      //All Modules : Built-in & Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule
  ],
  providers: [
    DataService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    },
    AuthService,
    LoginGaurdService
  ],   //Services 
  bootstrap: [AppComponent]
})
export class AppModule { }
