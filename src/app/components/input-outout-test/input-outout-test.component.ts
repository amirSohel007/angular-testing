import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-outout-test',
  templateUrl: './input-outout-test.component.html',
  styleUrls: ['./input-outout-test.component.scss'],
})
export class InputOutoutTestComponent implements OnInit {
  username: string = 'Amir Sohel';

  constructor() {}

  ngOnInit(): void {}

  getChild = (event) => console.log(event);
}
