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

  login(credentials: {username: string, password: string}): Observable<any> {
    console.log('Appel de AuthService.login avec :', credentials);

    return this.http.post(`${this.apiUrl}/login_check`, credentials).pipe(
      tap((response: any) => {
        console.log('Réponse de login_check reçue :', response);
        localStorage.setItem('auth_token', response.token);
        this._isLoggedIn$.next(true);

        // LA LIGNE CLÉ À AJOUTER pour le test de redirection
        this.router.navigate(['/dashboard']);
      })
    );
  }

  logout() {
    localStorage.removeItem('auth_token');
    this._isLoggedIn$.next(false);
    this.router.navigate(['/auth/login']); // Correction du chemin de déconnexion
  }
}
