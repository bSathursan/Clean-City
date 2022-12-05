import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showMe : boolean = false
  showOut : boolean = true
  btnVal = "NEXT";

  constructor(private route : Router, private Ngbmodal: NgbModal) { }

  ngOnInit(): void {
  }

 

  toggleTag(){
    this.showMe =! this.showMe;
    this.showOut =! this.showOut;
    this.btnVal = "DONE";
  }

  navigate(){
    this.Ngbmodal.open(FeedbackComponent,{
      size: 'xl' 
    })
    // this.route.navigate(['feedback'])
  }

}
