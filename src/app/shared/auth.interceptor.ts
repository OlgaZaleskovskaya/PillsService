import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';

export class AuthInterceptor implements HttpInterceptor {
 constructor (private authService: AuthService) {
 }

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const token = this.authService.getToken();
    const copiedReq = req.clone({params: req.params.set('auth', token)});
    console.log('TOKEN', token);
    return next.handle(copiedReq);
  }


}


