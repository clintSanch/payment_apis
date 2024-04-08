import { Injectable } from '@angular/core';
import { CoreLogs } from '../models/logs.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  appLogs: CoreLogs = new CoreLogs();
  
  constructor(private httpLoggerClient: HttpClient) { }
}
