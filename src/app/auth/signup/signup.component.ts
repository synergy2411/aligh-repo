import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, 
        FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class SignupComponent implements OnInit {

  username = new FormControl('',[
    Validators.required,
    Validators.minLength(5)
  ]);
  password = new FormControl('', [
    Validators.required,
    this.hasExclamation
  ]);
  registerForm : FormGroup;

  hasExclamation(input : FormControl){
    const hasExcl = input.value.indexOf('!') >=0;
    return hasExcl ? null : {needExclamation : true}
  }
  onSubmit(){
    console.log("Form Submitted!");
    console.log(this.registerForm);
  }

  constructor(private fb : FormBuilder) { 
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }


  ngOnInit() {
  }

}
