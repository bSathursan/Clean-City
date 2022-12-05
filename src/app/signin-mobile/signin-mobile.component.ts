import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-mobile',
  templateUrl: './signin-mobile.component.html',
  styleUrls: ['./signin-mobile.component.css'],
})
export class SigninMobileComponent implements OnInit {
  signinMobile = new FormGroup({
    mobile: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.signinMobile = this.formBuilder.group({
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }
  get f() {
    return this.signinMobile.controls;
  }
  Savefrom() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signinMobile.invalid) {
      return;
    } else {
      this.route.navigate(['code']);
    }
    console.log(JSON.stringify(this.signinMobile.value, null, 2));
  }
}
