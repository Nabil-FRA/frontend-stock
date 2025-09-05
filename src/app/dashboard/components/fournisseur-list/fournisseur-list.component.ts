import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FournisseurService } from '../../../core/fournisseur.service';

@Component({
  selector: 'app-fournisseur-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fournisseur-list.component.html',
})
export class FournisseurListComponent implements OnInit {
  fournisseurs: any[] = [];

  constructor(private fournisseurService: FournisseurService) {}

  ngOnInit(): void { this.loadFournisseurs(); }

  loadFournisseurs(): void {
    this.fournisseurService.getFournisseurs().subscribe(data => {
      this.fournisseurs = data;
    });
  }

  deleteFournisseur(id: number): void {
    if (confirm('Êtes-vous sûr ?')) {
      this.fournisseurService.deleteFournisseur(id).subscribe(() => {
        this.loadFournisseurs();
      });
    }
  }
}
