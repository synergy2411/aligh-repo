import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    SignupComponent
  ],
  imports: [      //All Modules : Built-in & Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService
  ],   //Services 
  bootstrap: [AppComponent]
})
export class AppModule { }
