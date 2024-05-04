import { APP_INITIALIZER, ApplicationConfig, ErrorHandler, PLATFORM_ID } from '@angular/core';
import { Router, provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import * as Sentry from '@sentry/angular-ivy';
import { isPlatformServer } from '@angular/common';

function provideSentryProviders(platformId: object): unknown[] {
  if (isPlatformServer(platformId)) {
    return [];
  }
  return [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        logErrors: true,
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => { },
      deps: [Sentry.TraceService],
      multi: true,
    },
  ];
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withDebugTracing()),
    provideClientHydration(
      withHttpTransferCacheOptions({ //configure this cache by using withHttpTransferCacheOptions when providing hydration.
        includePostRequests: true,
      })),
    provideHttpClient(withFetch()),
    {
      provide: 'sentryProviders',
      useFactory: provideSentryProviders,
      deps: [PLATFORM_ID]
    }
  ]
};
