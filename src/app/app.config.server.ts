import { mergeApplicationConfig, ApplicationConfig, TransferState, makeStateKey, APP_INITIALIZER } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient, withFetch } from '@angular/common/http';

const server_data_key = makeStateKey<any>(""); //state key

export function transferStateFactory(transferState: TransferState) {
  return () => {
    const state_value = {} //state value
    transferState.set(server_data_key, state_value)
  }
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: APP_INITIALIZER,
      useFactory: transferStateFactory,
      deps: [TransferState],
      multi: true
    },
    provideServerRendering(),
    provideHttpClient(withFetch())
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
