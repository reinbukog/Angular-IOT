import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    });

    console.log('this ');
  }

  onLogin() {
    console.log('login is clicked');
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;

    this.firebaseService.loginUser(email, password)
      .then(userCredentials => {
        console.log('successful login');
        console.log(JSON.stringify(userCredentials));
        this.firebaseService.setAuthLoggedIn();
        this.router.navigate(['/monitor']);
      })
      .catch(error => {
        console.log('incorrect');
      });
  }
}
