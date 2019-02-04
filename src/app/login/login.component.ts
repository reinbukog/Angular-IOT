import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    });

    console.log('this ');
  }

  onLogin() {
    console.log('login is clicked');
  }

}
