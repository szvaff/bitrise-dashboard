import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({
      headers: req.headers.set('Authorization', 'aKuF2qiRUulrhIkVRc-0Lg5yPto76pc0r0N6GYqIT7I6DLRcPp-GAS_rgqNk2DYTWYyvIw3y_hQCFKDMBG4FpA')
    });
    return next.handle(apiReq);
  }
}
