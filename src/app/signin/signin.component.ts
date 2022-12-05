import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })

  submitted = false

  constructor(private fromBuilder : FormBuilder, private route : Router) { }

  ngOnInit(): void {
    this.loginForm = this.fromBuilder.group({
      email : ['', Validators.compose([Validators.required, Validators.email])],
      password : ['', Validators.required]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  Saveform(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return
    } else{
      this.route.navigate(['dashboard'])
    }
  }

}
