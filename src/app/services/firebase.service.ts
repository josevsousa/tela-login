import { Injectable, inject } from "@angular/core";

// auth
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
// firestore 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, addDoc, getDoc, updateDoc, doc, collection, collectionData, query, deleteDoc } from '@angular/fire/firestore';
// fireStorage
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, uploadString, ref, getDownloadURL, deleteObject } from 'firebase/storage';


import { UtilsService } from './utils.service';
import { FormGroup } from "@angular/forms";
import { User } from "../interfaces/user.interface";



@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFireAuth);
  storage =  inject(AngularFireStorage);

  utilsService = inject(UtilsService);
  photoAvatar!: string|undefined;

  addPhotoAvatar(photoAvatar: string):void{
    this.photoAvatar = photoAvatar;
  }

  // =============== AUTH ================
  // user
  getAuth() {
    return getAuth();
  }
  // google login
  loginGoogle() {
    return this.auth.signInWithPopup(new GoogleAuthProvider())
      .then(user => {
        this.utilsService.saveInLocalStorage("userGoogle", user.user);
        this.utilsService.routerLink('/home');
      })
      .catch(erro => console.log("error loginGoogle(): ", erro))
  }

  // ====== AUTH ====
    // ====== Conectar ====
    signIn(user: User) {
      return signInWithEmailAndPassword(getAuth(), user.email, user.password)  
    }
    // ====== criar usuario ====
    signUp(user: User) {
      return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
    }
    // ====== Atualizar usuario ====
    updateUser(displayName: string) {
      return updateProfile(getAuth().currentUser!, { displayName })
    }
    // ====== Enviar email para restabelecer nova senha ====
    sendRecoveryEmail(email: string) {
      return sendPasswordResetEmail(getAuth(), email);
    }
    // ====== Desconectar
    desconectarGoogle() {
      this.auth.signOut().finally(() => {
        localStorage.clear();
        this.utilsService.routerLink('/');
      });
    }

  // =============== BASE DE DADOS ================
  // ==== Setar um documento ====
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }
  
  
  // ==== Atualizar um documento ====
  updateDocument(path: string, data: any) {
    return updateDoc(doc(getFirestore(), path), data);
  }
  

  // ==== Obter um documento ====
  async getDocument(path: string) {
    return  (await getDoc(doc(getFirestore(), path))).data();
  }
  
  // ==== Agregar um documento ====
  addDocument(path: string, data: any) {
    return  addDoc(collection(getFirestore(), path),data);
  }
  
   // ==== Deletar um documento passando um uid ====
   deletarDocument(path: string) {
    return deleteDoc(doc(getFirestore(), path));
  }
  
  // ==== Obter documentos de uma coleção ====
  getColletionData(path: string, collectinQuery?: any){
    const ref = collection(getFirestore(), path);
    return collectionData(query(ref, collectinQuery), {idField: 'id'});
  }


    
  // =============== upload de image ================
  async uploadImage(path: string, data_url: string){
    return uploadString(ref(getStorage(), path), data_url, 'data_url').then(()=>{
      return getDownloadURL(ref(getStorage(), path))
    })
  }
  // =============== Obter rota da image com sua url ================
  async getFilePath(url: string){
    return ref(getStorage(), url).fullPath
  }
  // =============== Deletar arquivo =================
  deletarFile(path: string){
    return deleteObject(ref(getStorage(), path));
  }
  
 
}