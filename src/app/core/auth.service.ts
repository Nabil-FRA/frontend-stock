import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('auth_token');
    this._isLoggedIn$.next(!!token);
  }

  // J'ajoute une fonction register pour être complet
  register(credentials: {email: string, password: string}): Observable<any> {
    // CORRECTION : Ajout de /api
    return this.http.post(`${this.apiUrl}/api/users`, credentials);
  }

  login(credentials: {username: string, password: string}): Observable<any> {
    // CORRECTION : Ajout de /api
    return this.http.post(`${this.apiUrl}/api/login_check`, credentials).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem('auth_token', response.token);
          this._isLoggedIn$.next(true);
          this.router.navigate(['/dashboard']);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('auth_token');
    this._isLoggedIn$.next(false);
    this.router.navigate(['/auth/login']);
  }
}
