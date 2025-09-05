import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategorieService } from '../../../core/categorie.service';

@Component({
  selector: 'app-categorie-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categorie-list.component.html',
})
export class CategorieListComponent implements OnInit {
  categories: any[] = [];

  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void { this.loadCategories(); }

  loadCategories(): void {
    this.categorieService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  deleteCategorie(id: number): void {
    if (confirm('Êtes-vous sûr ? Cette action pourrait affecter des produits.')) {
      this.categorieService.deleteCategorie(id).subscribe(() => {
        this.loadCategories();
      });
    }
  }
}
