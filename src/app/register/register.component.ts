import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerForm;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
      email: this.formBuilder.control('')
    });
  }
}
