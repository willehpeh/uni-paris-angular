import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private token$ = new BehaviorSubject<string>('');

  constructor(private router: Router,
              private http: HttpClient) {}

  getAuthStatus(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  getToken(): Observable<string> {
    return this.token$.asObservable();
  }

  signUp(): Observable<{ token: string }> {
    return this.http.get<{ token: string }>(`${environment.apiUrl}/auth`).pipe(
      tap((response) => {
        this.isLoggedIn$.next(true);
        this.token$.next(response.token);
        this.router.navigateByUrl('/posts');
      }),
      catchError(error => {
        alert(error.message);
        return EMPTY;
      })
    );
  }

  login(): Observable<{ token: string }> {
    return this.http.get<{ token: string }>(`${environment.apiUrl}/auth`).pipe(
      tap(({ token }) => {
        this.isLoggedIn$.next(true);
        this.token$.next(token);
        this.router.navigateByUrl('/posts');
      }),
      catchError(error => {
        alert(error.message);
        return EMPTY;
      })
    );
  }

  logout(): void {
    this.isLoggedIn$.next(false);
    this.token$.next('');
    this.router.navigateByUrl('/auth/login');
  }
}
