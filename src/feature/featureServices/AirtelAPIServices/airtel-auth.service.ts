import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sandboxEnvironment } from '../../../environments/environment.sandbox';
import { productionEnvironment } from '../../../environments/environment.production';

@Injectable({
  providedIn: 'root'
})
export class AirtelAuthService {

  sandboxURL = sandboxEnvironment.airtelMoneyUrl;
  productionURL = productionEnvironment.airtelMoneyUrl;

  constructor(private httpAirtelClient: HttpClient) { }
  
}
