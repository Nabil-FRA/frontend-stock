import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptor } from './core/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Cette fonction assure que l'intercepteur est appliqué à TOUTES les requêtes HttpClient
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
};
