import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule], // Nécessaire pour router-outlet et routerLink
  templateUrl: './layout.component.html',

})
export class LayoutComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
