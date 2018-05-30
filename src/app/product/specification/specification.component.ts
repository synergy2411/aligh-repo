import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {
  id : number;
  name : string;
  page_no : number;
  constructor(private route : ActivatedRoute) {
    // this.id = this.route.snapshot.params['id'];
    // this.name = this.route.snapshot.params['name'];

    this.route.params.subscribe((params)=>{
      this.id = params['id'];
      this.name = params["name"];
    })

    this.route.queryParams.subscribe(params=>{
      this.page_no = params['page'];
    })
   }

  ngOnInit() {
  }

}
