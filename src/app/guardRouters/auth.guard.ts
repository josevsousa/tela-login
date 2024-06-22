import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router } from "@angular/router";
import { FirebaseService } from "../services/firebase.service";


export const authGuard: CanActivateFn = ( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {

    const router = inject(Router);
    const firebaseService = inject(FirebaseService);

    if(firebaseService.stateUser()) {
        router.navigate(['/home']);
        return false;
    } else {
        return true;
    }
      
}