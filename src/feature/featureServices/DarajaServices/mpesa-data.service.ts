import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { MpesaUserDetails } from '../../models/mpesa.model';

@Injectable({
  providedIn: 'root'
})
export class MpesaDataService {

  C2Burl = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl";
  
  private currentMpesaStatus = new BehaviorSubject<MpesaUserDetails>('');
  currentStatus = this.currentMpesaStatus.asObservable();

  constructor(private httpMpesaDataClient: HttpClient) { }

  //payBill(){}
  //tillPayment(){}
  //pochiLaBiashara(){}
}
