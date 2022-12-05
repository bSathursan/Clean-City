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
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
})
export class ResetpasswordComponent implements OnInit {
  reset = new FormGroup({
    password: new FormControl(''),
    rePassword: new FormControl(''),
  });

  submitted = false;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.reset = this.formBuilder.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15),
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
    return this.reset.controls;
  }

  saveUser() {
    this.submitted = true;
    if (this.reset.invalid) {
      return;
    } else{
      this.route.navigate(['signin'])
    }
    console.log(JSON.stringify(this.reset.value, null, 2));
  }
}
