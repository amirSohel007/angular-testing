import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  authenticate() {
    localStorage.setItem('toekn', '12345');
  }

  isAuth(): boolean {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token') === '12345';
    }
  }
}
