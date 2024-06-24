import { Injectable, inject } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { AbstractControl, FormGroup } from "@angular/forms";
import { AuthService } from "./auth.service";

@Injectable({ providedIn:'root' })

export class FormService {

   authService = inject(AuthService);

   sendForm(form: string, tipoForm: string){
    
      if (tipoForm == 'login') {

          this.authService.signIn(form);
      
      } else if(tipoForm == 'registrar'){
      
         this.authService.signUp(form);
      
      } else {
         this.authService.forgotPassword(form);
      }

 }

}