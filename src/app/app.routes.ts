import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () => import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
  },
  // La route par défaut redirige vers le tableau de bord (qui sera protégé par le garde)
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // Toute autre route inconnue redirige vers la connexion
  { path: '**', redirectTo: 'auth/login' }
];
