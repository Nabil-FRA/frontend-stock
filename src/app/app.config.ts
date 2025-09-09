import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// 1. Importer les fonctions nécessaires
import { provideHttpClient, withInterceptors } from '@angular/common/http';
// 2. Importer votre intercepteur
import { authInterceptor } from './core/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    // 3. Activer l'intercepteur pour toutes les requêtes HTTP
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

