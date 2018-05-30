import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-obs-demo',
  templateUrl: './obs-demo.component.html',
  styleUrls: ['./obs-demo.component.css']
})
export class ObsDemoComponent implements OnInit {
  num : number;
  myModel : any;
  numbers : Observable<any>;

  unsub(){
    //this.numbers.unsubscribe();
  }

  sub(){
    this.numbers.subscribe(data=>this.num = data);
  }

  constructor() { 
    this.numbers = Observable.create((observer)=>{
      setTimeout(()=>{
        observer.next(102);
      }, 1000);
      setTimeout(()=>{
        observer.next(104);
      }, 3000);
      setTimeout(()=>{
        observer.next(106);
      }, 5000);
      setTimeout(()=>{
        observer.complete();
      }, 8000);
      setTimeout(()=>{
        observer.next(108);
      }, 9000);
    })
  }

  onKeyUp(val){
    
  }

  ngOnInit() {
    //this.numbers.subscribe(num => this.num = num)
  }

}
