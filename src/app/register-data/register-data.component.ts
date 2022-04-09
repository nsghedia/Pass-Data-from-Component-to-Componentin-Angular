import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-data',
  templateUrl: './register-data.component.html',
  styleUrls: ['./register-data.component.css']
})
export class RegisterDataComponent implements OnInit {

  @Input() item: any;
  @Output() deleteItem = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteCard(val: any) {
    this.deleteItem.emit(val);
  }

}
