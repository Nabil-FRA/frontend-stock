import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategorieService } from '../../../core/categorie.service';

@Component({
  selector: 'app-categorie-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './categorie-form.component.html',
})
export class CategorieFormComponent implements OnInit {
  // 1. Déclarer la propriété
  form;
  isEditMode = false;
  private id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private categorieService: CategorieService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // 2. Initialiser dans le constructeur
    this.form = this.fb.group({
      nom: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.id = +idParam;
      this.categorieService.getCategorie(this.id).subscribe(data => {
        this.form.patchValue(data);
      });
    }
  }

  onSubmit() {
    if (this.form.invalid) return;
    const saveObservable = this.isEditMode
      ? this.categorieService.updateCategorie(this.id!, this.form.value)
      : this.categorieService.createCategorie(this.form.value);
    saveObservable.subscribe(() => {
      this.router.navigate(['/dashboard/categories']);
    });
  }
}
