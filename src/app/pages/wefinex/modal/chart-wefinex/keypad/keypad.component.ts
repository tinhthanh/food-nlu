import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss'],
})
export class KeypadComponent implements OnInit {
  @Output() change: EventEmitter<{type: string , value : string}> = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  changeValue(value: {type: string , value : string}) {
    this.change.emit(value);
  }

}
