import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-testing',
  templateUrl: './event-testing.component.html',
  styleUrls: ['./event-testing.component.scss'],
})
export class EventTestingComponent implements OnInit {
  numCount: number = 0;

  constructor() {}

  ngOnInit(): void {}

  incrementCount = () => this.numCount++;
  decrementCount = () => (this.numCount === 0 ? 0 : this.numCount--);
}
