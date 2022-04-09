import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() tableDataValues = new EventEmitter<string>();
  loc = "Bangalore";
  constructor() { }

  ngOnInit(): void {
  }

  locations = ['Bangalore', 'Kalaburagi', 'Solapur'];
  SubmitForm(regisForm: NgForm) {
    this.tableDataValues.emit(regisForm.value);
  }

}
