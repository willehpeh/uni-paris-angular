import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  authStatus = {
    isLoggedIn: false
  };

  isLoggedIn$ = new Subject<boolean>();

  constructor(private router: Router) {}

  signUp(): void {
    this.authStatus.isLoggedIn = true;
    this.isLoggedIn$.next(true);
    this.router.navigateByUrl('/posts');
  }

  login(): void {
    this.authStatus.isLoggedIn = true;
    this.isLoggedIn$.next(true);
    this.router.navigateByUrl('/posts');
  }

  logout(): void {
    this.authStatus.isLoggedIn = false;
    this.isLoggedIn$.next(false);
    this.router.navigateByUrl('/auth/login');
  }
}
