import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenIntercepterService implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(req: any, next: any) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._authService.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
