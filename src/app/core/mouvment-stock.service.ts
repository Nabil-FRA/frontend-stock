import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MouvmentStockService {
  private apiUrl = `${environment.apiUrl}/mouvements`;

  constructor(private http: HttpClient) { }

  getMouvements(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createMouvement(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
