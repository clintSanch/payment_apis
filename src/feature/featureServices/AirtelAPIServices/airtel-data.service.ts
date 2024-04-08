import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AirtelMoneyUserDetails } from '../../models/airtel.model';
import { productionEnvironment } from '../../../environments/environment.production';
import { sandboxEnvironment } from '../../../environments/environment.sandbox';

@Injectable({
  providedIn: 'root'
})
export class AirtelDataService {
  
  airtelUrl = sandboxEnvironment.airtelMoneyUrl;
  
  private airtelmoneyCurrentStatus = new BehaviorSubject<AirtelMoneyUserDetails>('');
  currentStatus = this.airtelmoneyCurrentStatus.asObservable();

  constructor(private httpAirtelDtaClient: HttpClient) { }

  //paybill(){}
}
