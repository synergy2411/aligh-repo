import { Component } from '@angular/core';
import { USER_DATA } from './data/mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular!';
  user : any;

ngOnInit(){
   this.user = USER_DATA;
}

}
