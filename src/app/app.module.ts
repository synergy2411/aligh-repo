import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [   //Components, Pipes & Directives
    AppComponent,
    UserComponent
  ],
  imports: [      //All Modules : Built-in & Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],   //Services 
  bootstrap: [AppComponent]
})
export class AppModule { }
