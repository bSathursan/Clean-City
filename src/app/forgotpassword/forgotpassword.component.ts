import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  fogotpassword = new FormGroup({
    email : new FormControl('')
  })

  submitted = false

  constructor( private formBuilder : FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.fogotpassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.fogotpassword.controls;
  }

  SaveForm() {
    this.submitted = true;
    if (this.fogotpassword.invalid) {
      return;
    } else{
      this.route.navigate(['reset'])
    }
    console.log(JSON.stringify(this.fogotpassword.value, null, 2));
  }

}
