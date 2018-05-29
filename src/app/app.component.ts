import { Component } from '@angular/core';

import { User } from './model/user';
import { DataService } from './services/data-service';

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
    this.users= this.dataService.getUserData();
  }

}
