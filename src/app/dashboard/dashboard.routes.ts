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
// CORRECTION : Importe les noms de composants corrects
import { MouvementStockListComponent } from './components/mouvement-stock-list/mouvement-stock-list.component';
import { MouvementStockFormComponent } from './components/mouvement-stock-form/mouvement-stock-form.component';
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

      // CORRECTION : Utilise les noms de composants corrects
      { path: 'mouvements', component: MouvementStockListComponent },
      { path: 'mouvements/nouveau', component: MouvementStockFormComponent },

      { path: 'audit-logs', component: AuditLogListComponent },

      { path: '', redirectTo: 'produits', pathMatch: 'full' }
    ]
  }
];
