import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { productionEnvironment } from '../../environments/environment.production';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpAuthClient: HttpClient, @Inject(PLATFORM_ID) private platformId: object) { }

  signIn(){
    const path = '/api/auth/users';
    const url = isPlatformServer(this.platformId)? productionEnvironment.authUrl +path: path;

    return this.httpAuthClient.get(url)
    .pipe( map(res => res)).forEach(data => data.toString())
  }
}
