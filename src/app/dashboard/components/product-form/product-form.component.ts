import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../core/product.service';
// 1. Importer le service des catégories
import { CategorieService } from '../../../core/categorie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEditMode = false;
  // 2. Déclarer la variable pour la liste des catégories
  categories$!: Observable<any[]>;
  private productId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    // 3. Injecter le service des catégories
    private categorieService: CategorieService
  ) {
    this.productForm = this.fb.group({
      nom: ['', Validators.required],
      reference: [''],
      seuilDAlerte: [0, Validators.required],
      categorie: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    // 4. Récupérer la liste des catégories au chargement
    this.categories$ = this.categorieService.getCategories();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.productId = +id;
      this.productService.getProduit(this.productId).subscribe(product => {
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
    const payload = {
      ...formValue,
      categorie: `/api/categories/${formValue.categorie}`
    };

    const saveObservable = this.isEditMode
      ? this.productService.updateProduit(this.productId!, payload)
      : this.productService.createProduit(payload);

    saveObservable.subscribe(() => {
      this.router.navigate(['/dashboard/produits']);
    });
  }
}

