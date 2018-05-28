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
    @Input("user") user : any;
    @Input("abc") title : string;

    moreInfo(user){
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