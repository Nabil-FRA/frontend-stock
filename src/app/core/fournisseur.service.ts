import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  // CORRECTION : Ajout de /api
  private apiUrl = `${environment.apiUrl}/api/fournisseurs`;

  constructor(private http: HttpClient) { }

  getFournisseurs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getFournisseur(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createFournisseur(fournisseur: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, fournisseur);
  }

  updateFournisseur(id: number, fournisseur: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, fournisseur);
  }

  deleteFournisseur(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
