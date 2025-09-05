import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['admin@test.com', [Validators.required, Validators.email]],
      password: ['password', Validators.required],
    });
  }

  onSubmit() {
    console.log('Bouton cliqué !');
    console.log('Formulaire valide ?', this.loginForm.valid);
    console.log('Valeurs du formulaire :', this.loginForm.value);

    if (this.loginForm.valid) {
      console.log('Le formulaire est valide, envoi de la requête...');
      this.authService.login(this.loginForm.value as any).subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('La connexion a échoué', err);
        }
      });
    }
  }
}
