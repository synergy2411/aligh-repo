import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, 
        FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { DataService } from '../../services/data-service';

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
    this.authService.signup(
      this.registerForm.value.username, 
      this.registerForm.value.password)
    //this.username.valueChanges.subscribe(data=>console.log(data));
  }

  signin(){
    this.authService.signin(
      this.registerForm.value.username, 
      this.registerForm.value.password);
  }

  getData(){
    this.dataService.getApiData();
  }
  constructor(private fb : FormBuilder,
        private authService : AuthService,
        private dataService : DataService) { 
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }


  ngOnInit() {
  }

}
