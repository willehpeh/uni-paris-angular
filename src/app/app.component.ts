import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  authStatus: { isLoggedIn: boolean };

  isLoggedIn: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.authStatus.isLoggedIn;
    this.authStatus = this.authService.authStatus;
  }

  onLogout(): void {
    this.authService.logout();
  }

}
