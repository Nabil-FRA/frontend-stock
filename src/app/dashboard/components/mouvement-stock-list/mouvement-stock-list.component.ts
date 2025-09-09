import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// CORRECTION 1 : Le nom de la classe et le chemin du fichier sont mis à jour
import { MouvementStockService } from '../../../core/mouvement-stock.service';

@Component({
  // CORRECTION (Optionnelle) : Pour la cohérence
  selector: 'app-mouvement-stock-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mouvement-stock-list.component.html',
})
// CORRECTION (Optionnelle) : Pour la cohérence
export class MouvementStockListComponent implements OnInit {
  mouvements: any[] = [];

  // CORRECTION 2 : Le nom de la variable et le type sont mis à jour
  constructor(private mouvementStockService: MouvementStockService) {}

  ngOnInit(): void {
    // CORRECTION 3 : Le nom du service est mis à jour
    this.mouvementStockService.getMouvements().subscribe(data => this.mouvements = data);
  }
}
