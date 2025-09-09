import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MouvementStockService } from '../../../core/mouvement-stock.service';
import { ProductService } from '../../../core/product.service';
import { LocalisationService } from '../../../core/localisation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mouvement-stock-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './mouvement-stock-form.component.html',
})
export class MouvementStockFormComponent implements OnInit {
  form;
  produits$!: Observable<any[]>;
  localisations$!: Observable<any[]>;

  constructor(
    private fb: FormBuilder,
    private mouvementStockService: MouvementStockService,
    private produitService: ProductService,
    private localisationService: LocalisationService,
    private router: Router
  ) {
    this.form = this.fb.group({
      type: ['entrée', Validators.required],
      quantite: [1, [Validators.required, Validators.min(1)]],
      produit: [null, Validators.required],
      localisation: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.produits$ = this.produitService.getProduits();
    this.localisations$ = this.localisationService.getLocalisations();
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.mouvementStockService.createMouvement(this.form.value).subscribe(() => {
      this.router.navigate(['/dashboard/mouvements']);
    });
  }
}
