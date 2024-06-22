import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router } from "@angular/router";
import { FirebaseService } from "../services/firebase.service";



export const noAuthGuard: CanActivateFn = ( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {

    const router = inject(Router);
    const firebaseService = inject(FirebaseService);

    if(firebaseService.stateUser()) {
        return true;
    } else {
        router.navigate(['/auth']);
        return false;
    }
      
}