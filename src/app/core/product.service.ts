import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // CORRECTION : Ajout de /api
  private apiUrl = `${environment.apiUrl}/api/produits`;

  constructor(private http: HttpClient) { }

  getProduits(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProduit(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createProduit(produit: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, produit);
  }

  updateProduit(id: number, produit: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, produit);
  }

  deleteProduit(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
