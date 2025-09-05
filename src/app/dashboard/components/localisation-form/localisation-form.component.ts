import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LocalisationService } from '../../../core/localisation.service';

@Component({
  selector: 'app-localisation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './localisation-form.component.html',
})
export class LocalisationFormComponent implements OnInit {
  // 1. Déclarer la propriété
  form;
  isEditMode = false;
  private id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private localisationService: LocalisationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // 2. Initialiser dans le constructeur
    this.form = this.fb.group({
      nom: ['', Validators.required],
      adresse: [''],
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.id = +idParam;
      this.localisationService.getLocalisation(this.id).subscribe(data => {
        this.form.patchValue(data);
      });
    }
  }

  onSubmit() {
    if (this.form.invalid) return;
    const saveObservable = this.isEditMode
      ? this.localisationService.updateLocalisation(this.id!, this.form.value)
      : this.localisationService.createLocalisation(this.form.value);
    saveObservable.subscribe(() => {
      this.router.navigate(['/dashboard/localisations']);
    });
  }
}
