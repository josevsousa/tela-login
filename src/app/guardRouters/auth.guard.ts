import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from '../services/utils.service';
import { FirebaseService } from '../services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  firebaseService = inject(FirebaseService);
  utilsService = inject(UtilsService);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    const user = this.utilsService.getFromLocalStorage('user');
    const userGoogle = this.utilsService.getFromLocalStorage('userGoogle') 

    //esta online true
    if (user || userGoogle) {
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
