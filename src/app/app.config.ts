import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withDebugTracing()), 
    provideClientHydration(
      withHttpTransferCacheOptions({ //configure this cache by using withHttpTransferCacheOptions when providing hydration.
      includePostRequests: true, 
    })), 
    provideHttpClient(withFetch())]
};
