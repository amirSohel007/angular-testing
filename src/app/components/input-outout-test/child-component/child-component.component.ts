import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
})
export class ChildComponentComponent implements OnInit {
  @Input() name: string;
  @Output() childCompValue = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendValue() {
    this.childCompValue.emit('I am coming from child component');
  }
}
