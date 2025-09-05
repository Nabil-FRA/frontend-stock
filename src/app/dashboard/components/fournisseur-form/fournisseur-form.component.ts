import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FournisseurService } from '../../../core/fournisseur.service';

@Component({
  selector: 'app-fournisseur-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './fournisseur-form.component.html',
})
export class FournisseurFormComponent implements OnInit {
  // 1. Déclarer la propriété
  form;
  isEditMode = false;
  private id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private fournisseurService: FournisseurService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // 2. Initialiser dans le constructeur
    this.form = this.fb.group({
      nom: ['', Validators.required],
      contact: [''],
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.id = +idParam;
      this.fournisseurService.getFournisseur(this.id).subscribe(data => {
        this.form.patchValue(data);
      });
    }
  }

  onSubmit() {
    if (this.form.invalid) return;
    const saveObservable = this.isEditMode
      ? this.fournisseurService.updateFournisseur(this.id!, this.form.value)
      : this.fournisseurService.createFournisseur(this.form.value);
    saveObservable.subscribe(() => {
      this.router.navigate(['/dashboard/fournisseurs']);
    });
  }
}
