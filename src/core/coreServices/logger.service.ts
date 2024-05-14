import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CoreLogs } from '../models/logs.model';
import { HttpClient } from '@angular/common/http';
import { isPlatformServer } from '@angular/common';
import { devEnvironment } from '../../environments/environment.development';
import * as Sentry from '@sentry/angular-ivy';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private readonly server = devEnvironment.base_url;

  appLogs: CoreLogs = new CoreLogs();
  
  constructor(private httpLoggerClient: HttpClient, @Inject(PLATFORM_ID) private platformid: object) { }

  getLogs() {
    const url = isPlatformServer(this.platformid);
  }
}
