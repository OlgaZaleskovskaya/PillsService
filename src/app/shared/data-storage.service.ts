import {HttpClient, HttpEvent, HttpEventType, HttpParams, HttpRequest} from '@angular/common/http';
import {UserInfoService} from './userInfo.service';
import {Injectable} from '@angular/core';
import {User} from './user.model';
import { map } from 'rxjs/operators';
import {getResponseURL} from '@angular/http/src/http_utils';
import {AuthService} from '../modules/auth/auth.service';

@Injectable()
export class DataStorageService {
  url = 'https://maccabi-b2bd7.firebaseio.com/data.json';
  constructor(private httpClient: HttpClient,
              private authService: AuthService) {
  }
 token = this.authService.getToken();
  fetchUsers() {
  /*  return this.httpClient.get('https://maccabi-b2bd7.firebaseio.com/data.json?auth=' +  this.token, {observe: 'response'});*/
     return this.httpClient.get('https://maccabi-b2bd7.firebaseio.com/data.json', {observe: 'response'});
      /* return this.httpClient.get('https://maccabi-b2bd7.firebaseio.com/data.json',
       {observe: 'response', params: new HttpParams().set('auth', this.token)});*/
     /* .pipe(
      map((userInfo) => {
            if (!userInfo['addressList']) {
              userInfo['addressList'] = [];
            }
        console.log('userInfo from http');
          console.log(userInfo);
          return userInfo;
        }
      )
    );*/
  }

  storeUser(user: User) {
    // const req = new HttpRequest('PUT', 'https://maccabi-b2bd7.firebaseio.com/data.json', user, {reportProgress: true, params: });
   return this.httpClient.put('https://maccabi-b2bd7.firebaseio.com/data.json' , user, {observe: 'response'});
  }
}
