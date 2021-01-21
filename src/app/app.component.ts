import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  isLoggedIn$: Observable<boolean>;

  destroy$: Subject<boolean>;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.isLoggedIn$ = this.authService.getAuthStatus().pipe(
      takeUntil(this.destroy$),
      tap(value => console.log(value)),
      // map(value => value ? 'Authentifié !' : 'Non authentifié !'),
      // tap(value => console.log(value))
    );

    // this.isLoggedIn$.subscribe();
  }

  onLogout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
