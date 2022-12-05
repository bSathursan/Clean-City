import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import Validation from '../utils/validation';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private route : Router) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15)
            // Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})'),
          ],
        ],
        rePassword: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'rePassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  saveUser() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    } else{
      this.route.navigate(['dashboard'])
    }
    console.log(JSON.stringify(this.signupForm.value, null, 2));
  }
}
