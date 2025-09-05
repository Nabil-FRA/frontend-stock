import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../core/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit {
  // 1. On déclare la propriété ici, sans l'initialiser
  productForm;
  isEditMode = false;
  private productId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // 2. On initialise le formulaire ici, une fois que 'fb' existe
    this.productForm = this.fb.group({
      nom: ['', Validators.required],
      reference: [''],
      seuil_d_alerte: [0],
      categorie: this.fb.group({
        id: [null, Validators.required]
      })
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.productId = +id;
      this.productService.getProduit(this.productId).subscribe(product => {
        this.productForm.patchValue(product);
      });
    }
  }

  onSubmit() {
    if (this.productForm.invalid) return;

    const formValue = this.productForm.value;
    const saveObservable = this.isEditMode
      ? this.productService.updateProduit(this.productId!, formValue)
      : this.productService.createProduit(formValue);

    saveObservable.subscribe(() => {
      this.router.navigate(['/dashboard/produits']);
    });
  }
}
