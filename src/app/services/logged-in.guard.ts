import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivateChild } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { first, map as observableMap, concatMap } from 'rxjs/operators';

@Injectable()
export class LoggedInGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.authStateChange().pipe(first(),
      observableMap((status) => {
        if (status) {
          return true;
        } else {
          return false;
        }
      }));
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return this.canActivate(route, state);
  }

}
