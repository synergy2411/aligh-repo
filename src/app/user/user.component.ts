import { Component, 
    Input, 
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy, 
    Output,
    EventEmitter,
    SimpleChanges} from '@angular/core';
import { User } from '../model/user';
import { DataService } from '../services/data-service';


@Component({
    selector : 'app-user',
    //template : '<h1>{{ user.firstName }} {{ user.lastName }}</h1>',
    templateUrl : './user.component.html',
    styleUrls : [`./user.component.css`],
    providers : [DataService]
})
export class UserComponent implements OnInit{

    @Input("xyz") xyz : string;
    @Input("users") users : User;
    @Input("abc") title : string;

    @Output ('childEvent') childEvent = new EventEmitter();

    onKeyUp(value: string){
        this.childEvent.emit(value);
    }
    tab : any;
    myStyle = {
        
    }

    allClasses = {
        myClass : true,
        yourClass : false
    }

    moreInfo(user){
        this.tab = 2; 
        alert(`${user.firstName} is working with ${user.company}!!`);
        this.allClasses.myClass = !this.allClasses.myClass;
    }

    constructor(public dataService : DataService){}
    increase(){
        this.dataService.counter++;
    }

   // constructor(){console.log("Constructor Called!")}
    ngOnInit(){console.log("ngOnInit Called!");}
    // ngOnChanges(changes : SimpleChanges){console.log("ngOnChanges Called!", changes);}
    // ngDoCheck(){console.log("ngDoCheck Called!");}
    // ngAfterContentInit(){console.log("ngAfterContentInit Called!");}
    // ngAfterContentChecked(){console.log("ngAfterContentChecked Called!");}
    // ngAfterViewInit(){console.log("ngAfterViewInit Called!");}
    // ngAfterViewChecked(){console.log("ngAfterViewChecked Called!");}
    // ngOnDestroy(){console.log("ngOnDestroy Called!");}
}