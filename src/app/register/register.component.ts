import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerForm;

  constructor(
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      password: this.formBuilder.control(''),
      email: this.formBuilder.control('')
    });
  }

  onRegister() {
    const email = this.registerForm.controls['email'].value;
    const password = this.registerForm.controls['password'].value;

    this.firebaseService.registerUser(email, password)
      .then(userCredential => {
        this.router.navigate(['/monitor']);
      })
      .catch(error => {
        console.log('error during registration');
      });
  }
}
