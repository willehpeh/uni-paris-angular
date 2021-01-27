import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {

  private currentUser$ = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
  }

  getUserByUserId(id: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser$.asObservable();
  }

  setCurrentUser(user: User): void {
    this.currentUser$.next(user);
  }
}
