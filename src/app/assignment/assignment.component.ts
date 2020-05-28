import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  subscription: string = "advanced";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Email: ",this.form.value.email);
    console.log("Subscription: ",this.form.value.subscription);
    console.log("Password: ",this.form.value.password);
  }

}
