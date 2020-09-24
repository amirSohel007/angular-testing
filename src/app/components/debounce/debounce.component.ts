import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent, interval, from } from 'rxjs';
import {
  map,
  debounce,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss'],
})
export class DebounceComponent implements AfterViewInit {
  //Defined DOM Element here
  @ViewChild('searchInput') myInput: ElementRef;
  @ViewChild('debounceTimeInput') DebounceInput: ElementRef;
  @ViewChild('distinctInput') DistinctSearch: ElementRef;

  constructor(private data: DataService) {}

  ngAfterViewInit(): void {
    //Creating data stream using fromEvent
    const normalSearch = fromEvent<any>(this.myInput.nativeElement, 'keyup');
    const debounceTimeSearch = fromEvent<any>(
      this.DebounceInput.nativeElement,
      'keyup'
    );
    const distinctSearch = fromEvent<any>(
      this.DistinctSearch.nativeElement,
      'keyup'
    );

    //EXAMPLE 1 (Normal Search)
    normalSearch
      .pipe(map((event) => event.target.value))
      .subscribe((val) => this.getItems(val));

    //EXAMPLE 2 (debounce Time Search)
    debounceTimeSearch
      .pipe(map((event) => event.target.value))
      .subscribe((val) => this.getItems(val));

    //EXAMPLE 3 (Distintict Search)
    distinctSearch
      .pipe(map((event) => event.target.value))
      .subscribe((val) => this.getItems(val));
  }

  //API Call function to fetch data from server
  getItems(term) {
    this.data.searchItems(term).subscribe((res) => {
      console.log(res);
    });
  }
}
