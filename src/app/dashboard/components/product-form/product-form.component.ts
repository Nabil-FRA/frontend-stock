import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../core/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEditMode = false;
  private productId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // CORRECTION 1 : Simplification de la structure du formulaire.
    // 'categorie' est maintenant un simple champ qui contiendra l'ID.
    this.productForm = this.fb.group({
      nom: ['', Validators.required],
      reference: [''],
      seuilDAlerte: [0, Validators.required], // CORRECTION : Nom de propriété en camelCase
      categorie: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.productId = +id;
      this.productService.getProduit(this.productId).subscribe(product => {
        // CORRECTION 4 : Extraire l'ID de l'IRI de la catégorie pour le formulaire
        const productForForm = {
          ...product,
          categorie: product.categorie ? product.categorie.split('/').pop() : null
        };
        this.productForm.patchValue(productForForm);
      });
    }
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }

    const formValue = this.productForm.value;

    // CORRECTION 2 : On transforme les données pour l'API.
    // L'ID de la catégorie est converti en IRI.
    const payload = {
      ...formValue,
      categorie: `/api/categories/${formValue.categorie}`
    };

    // CORRECTION 3 : Le nom de la propriété est corrigé pour correspondre à l'entité Symfony
    // (Cette ligne est optionnelle si vous corrigez aussi dans le template HTML)
    delete payload.seuil_d_alerte; // On supprime l'ancienne clé si besoin

    const saveObservable = this.isEditMode
      ? this.productService.updateProduit(this.productId!, payload)
      : this.productService.createProduit(payload);

    saveObservable.subscribe(() => {
      this.router.navigate(['/dashboard/produits']);
    });
  }
}
