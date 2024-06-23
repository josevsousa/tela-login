import { Injectable,inject } from '@angular/core';



// firestore
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail, } from 'firebase/auth';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  router = inject(Router);
  // auth = inject(AngularFireAuth);

  getAuth(){
    // return getAuth();
    return false
  }

  // ====== Conectar ====
  // signIn(user: User) {
  //   return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  // }
  // ====== criar usuario ====
  // signUp(user: User) {
  //   return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  // }
  // ====== Atualizar usuario ====
  // updateUser(displayName: string) {
  //   return updateProfile(getAuth().currentUser, { displayName })
  // }
  // ====== Enviar email para restabelecer nova senha ====
  // sendRecoveryEmail(email: string) {
  //   return sendPasswordResetEmail(getAuth(), email);
  // }
   // ====== Logolt ======
  //  logOut(){
  //   getAuth().signOut();
  //   this.router.navigateByUrl('/auth')
  // }
}
