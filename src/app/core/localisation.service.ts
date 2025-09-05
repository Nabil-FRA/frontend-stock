import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalisationService {
  private apiUrl = `${environment.apiUrl}/localisations`;

  constructor(private http: HttpClient) { }

  getLocalisations(): Observable<any[]> { return this.http.get<any[]>(this.apiUrl); }
  getLocalisation(id: number): Observable<any> { return this.http.get<any>(`${this.apiUrl}/${id}`); }
  createLocalisation(data: any): Observable<any> { return this.http.post<any>(this.apiUrl, data); }
  updateLocalisation(id: number, data: any): Observable<any> { return this.http.put<any>(`${this.apiUrl}/${id}`, data); }
  deleteLocalisation(id: number): Observable<any> { return this.http.delete<any>(`${this.apiUrl}/${id}`); }
}
