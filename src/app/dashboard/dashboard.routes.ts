import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FournisseurListComponent } from './components/fournisseur-list/fournisseur-list.component';
import { FournisseurFormComponent } from './components/fournisseur-form/fournisseur-form.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';
import { CategorieFormComponent } from './components/categorie-form/categorie-form.component';
import { LocalisationListComponent } from './components/localisation-list/localisation-list.component';
import { LocalisationFormComponent } from './components/localisation-form/localisation-form.component';
import { MouvmentStockListComponent } from './components/mouvment-stock-list/mouvment-stock-list.component';
import { MouvmentStockFormComponent } from './components/mouvment-stock-form/mouvment-stock-form.component';
import { AuditLogListComponent } from './components/audit-log-list/audit-log-list.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'produits', component: ProductListComponent },
      { path: 'produits/nouveau', component: ProductFormComponent },
      { path: 'produits/modifier/:id', component: ProductFormComponent },

      { path: 'fournisseurs', component: FournisseurListComponent },
      { path: 'fournisseurs/nouveau', component: FournisseurFormComponent },
      { path: 'fournisseurs/modifier/:id', component: FournisseurFormComponent },
      { path: 'categories', component: CategorieListComponent },
  { path: 'categories/nouveau', component: CategorieFormComponent },
  { path: 'categories/modifier/:id', component: CategorieFormComponent },
  { path: 'localisations', component: LocalisationListComponent },
  { path: 'localisations/nouveau', component: LocalisationFormComponent },
  { path: 'localisations/modifier/:id', component: LocalisationFormComponent },
  { path: 'mouvements', component: MouvmentStockListComponent },
  { path: 'mouvements/nouveau', component: MouvmentStockFormComponent },
  { path: 'audit-logs', component: AuditLogListComponent },

      { path: '', redirectTo: 'produits', pathMatch: 'full' }
    ]
  }
];
