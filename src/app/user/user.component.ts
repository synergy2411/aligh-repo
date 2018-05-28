import { Component } from '@angular/core';

@Component({
    selector : 'app-user',
    //template : '<h1>{{ user.firstName }} {{ user.lastName }}</h1>',
    templateUrl : './user.component.html',
    styles : [`
        h1{
            color : blue;
        }
    `]
})
export class UserComponent{
    user  = {
        firstName : "Bill",
        lastName : "Gates",
        dob : new Date("Dec 1, 1963"),
        income : 50000,
        company : "Microsoft",
        isWorking : true
    }
}