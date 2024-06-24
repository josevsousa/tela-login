import { Injectable, inject } from "@angular/core";

// auth
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, getAuth } from '@angular/fire/auth';
import { UtilsService } from './utils.service';
import { User } from '../interfaces/user.interface';


@Injectable({
    providedIn: 'root'
})

export class AuthService {

    auth = inject(AngularFireAuth)
    utilsSvc = inject(UtilsService);
    

    // =============== AUTH ================
    // user
    getAuth() {
        return getAuth();
      }

      getTeste(){
        return "addd";
      }

    // google login
    loginGoogle() {
        return this.auth.signInWithPopup(new GoogleAuthProvider())
            .then(user=> {
            const userLS = {
              displayName: user.user?.displayName, 
              email:user.user?.email, 
              photoUrl:user.user?.photoURL };  

            this.utilsSvc.saveInLocalStorage("user", JSON.stringify(userLS));
            this.utilsSvc.routerLink('/home');  
          })
            .catch(erro => console.log("error loginGoogle(): ", erro ))
    }

  // ====== desconectar Usuario ====
  desconectarGoogle() {
    this.auth.signOut().then(()=> {
      localStorage.clear();
      this.utilsSvc.routerLink('/');
    });
  }

    // login cadastro recuperar-senha
    signIn(form: string){
        console.log(JSON.parse(form));
    }

    signUp(form: string){
        console.log(JSON.parse(form));
    }

    forgotPassword(form: string){
        console.log(JSON.parse(form))
    }

  }