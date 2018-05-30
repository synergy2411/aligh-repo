import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  gotoHome(){
    this.router.navigate(['/']);
  }
  constructor(private router : Router) { }

  ngOnInit() {
  }

}
