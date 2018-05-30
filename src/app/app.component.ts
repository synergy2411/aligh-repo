import { Component } from '@angular/core';

import { User } from './model/user';
import { DataService } from './services/data-service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular!';
  users : User[];

  customEventHandler(eventdata){
    this.title = eventdata
  }

  increase(){
    this.dataService.counter++;
  }
  constructor(public dataService : DataService){}
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyADO3idaBcUuOqbEXayQ_12bxnoWHg_pQI",
      authDomain: "ng-app-dedd9.firebaseapp.com"
    });

   //this.users=  this.dataService.getUserData();
   this.dataService.getUserData()
      .subscribe(
        (users)=>this.users = users,
        (error)=>console.log("ERROR", error),
        ()=>console.log("COMPLETED!!")
      )
   //this.dataService.getApiData();
  }

}
