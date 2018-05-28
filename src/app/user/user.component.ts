import { Component } from '@angular/core';

@Component({
    selector : 'app-user',
    template : '<h1>User Component Loaded!!</h1>',
    styles : [`
        h1{
            color : blue;
        }
    `]
})
export class UserComponent{}