import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../core/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  produits: any[] = [];
  constructor(private productService: ProductService) { }
  ngOnInit(): void { this.loadProduits(); }

  loadProduits(): void {
    this.productService.getProduits().subscribe({
      next: (data) => { this.produits = data; },
      error: (err) => { console.error('Erreur lors de la récupération des produits', err); }
    });
  }

  deleteProduit(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      this.productService.deleteProduit(id).subscribe(() => {
        this.loadProduits();
      });
    }
  }
}
