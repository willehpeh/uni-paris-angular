import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  getAuthStatus(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  signUp(): void {
    this.isLoggedIn$.next(true);
    this.router.navigateByUrl('/posts');
  }

  login(): void {
    this.isLoggedIn$.next(true);
    this.router.navigateByUrl('/posts');
  }

  logout(): void {
    this.isLoggedIn$.next(false);
    this.router.navigateByUrl('/auth/login');
  }
}
