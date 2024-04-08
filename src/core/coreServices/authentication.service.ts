import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpAuthClient: HttpClient) { }

  signIn(){
    return this.httpAuthClient.get('/api/v1/user')
    .pipe( map(res => res)).forEach(data => data.toString())
  }
}
