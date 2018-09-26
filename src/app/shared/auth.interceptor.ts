import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

/*rxjs/Observable*/

import {Observable} from 'rxjs';
import {AuthService} from '../modules/auth/auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
/*constructor (public authService: AuthService) {
 }*/

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 /*const token = this.authService.getToken();
   console.log('Intercepter ', token);
  const copiedReq = req.clone({params: req.params.set('auth', token)});
  console.log('TOKEN', token);*/
    return next.handle(req);
  }


}


