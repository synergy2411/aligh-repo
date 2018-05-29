import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filteredStatus = "";

  someData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(101);
    }, 2000);
  });

  addNewTodo(){
    this.todos.push({label:"New Work", status: "pending"});
  }

  todos = [{
    label : "Some Work",
    status : "pending"
  },{
    label : "Some Work",
    status : "done"
  },{
    label : "Some Work",
    status : "done"
  },{
    label : "Some Work",
    status : "pending"
  }]
  constructor() { }

  ngOnInit() {
  }

}
