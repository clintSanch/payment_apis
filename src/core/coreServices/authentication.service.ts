import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { productionEnvironment } from '../../environments/environment.production';
import { devEnvironment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly server = devEnvironment.base_url;

  constructor(private httpAuthClient: HttpClient, @Inject(PLATFORM_ID) private platformId: object) { }

  signIn(){
    const path = '/api/auth/users';
    const url = isPlatformServer(this.platformId)? productionEnvironment.authUrl +path: path;

    return this.httpAuthClient.get(url)
    .pipe( map(res => res)).forEach(data => data.toString())
  }
}
