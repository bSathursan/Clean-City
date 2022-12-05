import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  feedback = new FormGroup({
    description: new FormControl(''),
  });

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private Ngbactivemodal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.feedback = this.formBuilder.group({
      description: ['', Validators.required],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.feedback.controls;
  }

  saveForm() {
    this.submitted = true;
    if (this.feedback.invalid) {
      return;
    } else {
      alert('Successfully Submited');
      this.close();
    }
    console.log(JSON.stringify(this.feedback.value, null, 2));
  }
  close() {
    this.Ngbactivemodal.close();
  }
}
