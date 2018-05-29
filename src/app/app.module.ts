import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './directives/highlight-directive';
import { UnlessDirective } from './directives/unless.directive';
import { NationalCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterComponent } from './filter/filter.component';
import { CommentFormComponent } from './user/comment-form/comment-form.component';

@NgModule({
  declarations: [   //Components, Pipes & Directives
    AppComponent,
    UserComponent,
    HighlightDirective,
    UnlessDirective,
    NationalCodePipe,
    FilterPipe,
    FilterComponent,
    CommentFormComponent
  ],
  imports: [      //All Modules : Built-in & Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],   //Services 
  bootstrap: [AppComponent]
})
export class AppModule { }
