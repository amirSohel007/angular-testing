import { Component, OnInit } from '@angular/core';
import { AuthService } from './components.service';

@Component({
  selector: 'app-servicebased-component',
  templateUrl: './servicebased-component.component.html',
  styleUrls: ['./servicebased-component.component.scss'],
})
export class ServicebasedComponentComponent implements OnInit {
  salaryStatus: string = '';

  constructor(public authService: AuthService) {
    this.authService.authenticate();
  }

  ngOnInit(): void {}

  getSalarySlip() {
    this.salaryStatus = 'Salary slip';
    if (this.authService.isAuth()) {
      return 'Salary slip';
    } else {
      return 'No logged in';
    }
  }
}
