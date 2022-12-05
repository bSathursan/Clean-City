import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  verification = new FormGroup({
    code : new FormControl('')
  })
  submitted = false

  constructor(private formBuilder : FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.verification = this.formBuilder.group({
      code: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(4),
          Validators.maxLength(4),
        ],
      ],
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.verification.controls;
  }
  verifyfrom() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.verification.invalid) {
      return;
    } else {
      this.route.navigate(['dashboard'])
    }
    console.log(JSON.stringify(this.verification.value, null, 2));
  }

}
