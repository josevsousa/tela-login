import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from '../services/utils.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  authService = inject(AuthService);
  utilsService = inject(UtilsService);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    //esta online true
    if (this.utilsService.getFromLocalStorage('user')) {
      this.utilsService.routerLink('/home');
      return false;
    }
    else {
      return true;
    }
  
    //   return new Promise((resolve) => {
    //         //esta online true
    //         if(localStorage.getItem('user')){
    //           this.utilsSvc.routerLink('/home');
    //           resolve(false);
    //         }
    //         else{
    //           resolve(true);
    //         }
    //   });

  }

}
