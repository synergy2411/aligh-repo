import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [   //Components, Pipes & Directives
    AppComponent,
    UserComponent
  ],
  imports: [      //All Modules : Built-in & Custom
    BrowserModule
  ],
  providers: [],   //Services 
  bootstrap: [AppComponent]
})
export class AppModule { }
