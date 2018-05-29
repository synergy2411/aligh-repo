import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './directives/highlight-directive';

@NgModule({
  declarations: [   //Components, Pipes & Directives
    AppComponent,
    UserComponent,
    HighlightDirective
  ],
  imports: [      //All Modules : Built-in & Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],   //Services 
  bootstrap: [AppComponent]
})
export class AppModule { }
