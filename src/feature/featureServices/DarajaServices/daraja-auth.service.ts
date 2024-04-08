import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productionEnvironment } from '../../../environments/environment.production';
import { sandboxEnvironment } from '../../../environments/environment.sandbox';


@Injectable({
  providedIn: 'root'
})
export class DarajaAuthService {

  authUrl = sandboxEnvironment.mpesaUrl;
  productionUrl = productionEnvironment.mpesaUrl
  
  constructor(private httpDarajaClient: HttpClient) { }
}
