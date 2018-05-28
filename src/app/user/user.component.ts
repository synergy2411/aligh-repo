import { Component, 
    Input, 
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy } from '@angular/core';
import { User } from '../model/user';

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
export class UserComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{

    @Input("xyz") xyz : string;
    @Input("users") users : User;
    @Input("abc") title : string;
    tab : any;
    moreInfo(user){
        this.tab = 2; 
        alert(`${user.firstName} is working with ${user.company}!!`);
    }
    constructor(){console.log("Constructor Called!")}
    ngOnInit(){console.log("ngOnInit Called!");}
    ngOnChanges(){console.log("ngOnChanges Called!");}
    ngDoCheck(){console.log("ngDoCheck Called!");}
    ngAfterContentInit(){console.log("ngAfterContentInit Called!");}
    ngAfterContentChecked(){console.log("ngAfterContentChecked Called!");}
    ngAfterViewInit(){console.log("ngAfterViewInit Called!");}
    ngAfterViewChecked(){console.log("ngAfterViewChecked Called!");}
    ngOnDestroy(){console.log("ngOnDestroy Called!");}
}