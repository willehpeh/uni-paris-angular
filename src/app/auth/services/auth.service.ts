import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  authStatus = {
    isLoggedIn: false
  };

  constructor(private router: Router) {}

  signUp(): void {
    this.authStatus.isLoggedIn = true;
    this.router.navigateByUrl('/posts');
  }

  login(): void {
    this.authStatus.isLoggedIn = true;
    this.router.navigateByUrl('/posts');
  }

  logout(): void {
    this.authStatus.isLoggedIn = false;
    this.router.navigateByUrl('/auth/login');
  }
}
