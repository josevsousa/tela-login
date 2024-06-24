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

  // user
  getAuth() {
    return getAuth();
  }

  //login google
  loginGoogle() {
    return this.auth.signInWithPopup(new GoogleAuthProvider())
      .then(user => {
        this.utilsSvc.saveInLocalStorage('user', `{email:${user.user?.email},name:${user.user?.displayName},photoUrl:${user.user?.photoURL}}`);
        this.utilsSvc.routerLink('/home');
      })
      .catch(erro => console.log("error loginGoogle(): ", erro))
  }

  //======== EMAIL PASSWORD
  // login cadastro recuperar-senha
  signIn(form: string) {
    console.log(JSON.parse(form));
  }
  signUp(form: string) {
    console.log(JSON.parse(form));
  }
  forgotPassword(form: string) {
    console.log(JSON.parse(form))
  }


   // logout
   desconectarGoogle() {
    this.auth.signOut().then(() => {
      localStorage.clear();
      this.utilsSvc.routerLink('/');
    });
  }

}