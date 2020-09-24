import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pipe-testing',
  templateUrl: './pipe-testing.component.html',
  styleUrls: ['./pipe-testing.component.scss'],
})
export class PipeTestingComponent implements OnInit {
  numValue: any;

  constructor() {}

  ngOnInit(): void {}
}
