import { Component, inject, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputPrimaryComponent } from "../input-primary/input-primary.component";
import { BottomPrimaryComponent } from "../primary-bottom/primary-bottom.component";
import { BottomPrimaryDisabledComponent } from "../primary-bottom/primary-bottom-disabled.component";

import { UtilsService } from "../../services/utils.service";
import { FirebaseService } from "../../services/firebase.service";
import { User } from "../../interfaces/user.interface";


@Component({
  selector: 'form-full',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, InputPrimaryComponent, BottomPrimaryComponent, BottomPrimaryDisabledComponent],
  template: `
      <form [formGroup]="form">

          @if(formTipo == 'registrar') {
            <input-primary inp-title="name" [control]="form.controls.displayName"></input-primary>
          }
          <input-primary inp-title="email" [control]="form.controls.email"></input-primary>
          
          @if(formTipo != 'recuperar'){
            <input-primary inp-title="password" [control]="form.controls.password"></input-primary>
          }
          @if (form.valid) {
            <bottom-primary btn-title="{{formTipo}}" [loading]="loading" (click)="onSubmit()"></bottom-primary>
          }@else {
          <bottom-primary-disabled btn-title="{{formTipo}}"></bottom-primary-disabled>
          }

      </form>
    `
})

export class FormfullComponent implements OnInit {

  @Input('form-tipo') formTipo!: string;
  pathImage!: any;
  loading: boolean = false;

  firebaseService = inject(FirebaseService);
  utilsService = inject(UtilsService);

  ngOnInit() {
    if (this.formTipo == 'recuperar') {
      this.form.patchValue({ password: 'recuperar' });
    }
  }

  form = new FormGroup({
    uid: new FormControl(''),
    photoURL: new FormControl('../../../assets/imagens/photo-user.png'),
    displayName: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    email: new FormControl('', [ Validators.required, Validators.email ] ),
    password: new FormControl('', [ Validators.required, Validators.minLength(6) ] )
  })


  onSubmit() {

    // this.formService.sendForm( this.form, this.formTipo);
    if (this.formTipo == 'login') {
      this.loading = true;
      this.firebaseService.signIn(this.form.value as User)
        .then(user => {
          // buscar o user no db
          // monstar o user no firestore
          const path = `/users/${user.user.uid}`;
          this.firebaseService.getDocument(path)
            .then(async resp => {
              await this.utilsService.saveInLocalStorage('user', resp);
              this.utilsService.routerLink('/home');
            

            })
            .catch(err => console.log("erro da login", err))

        })

    } else if (this.formTipo == 'registrar') {
      this.loading = true;
      // registrando um user no fireauth
      this.firebaseService.signUp(this.form.value as User)
        .then( async resp => {

          let uid = resp.user.uid; // uid do user cadastrado
          
          // enviar o uid do user cadastrado para o form
          this.form.controls.uid.setValue(uid); 

          //tirou foto? enviar para o firestore e atualizar o form.photoUrl
          const photoAvatar = this.firebaseService.photoAvatar;
          if (photoAvatar) {
              // === Suber imagem e obter a url ====
              let dataUrl = photoAvatar;
              let imagePath = `${uid}/${Date.now()}`;
              let imageUrl = await this.firebaseService.uploadImage(imagePath, dataUrl);
              this.form.controls.photoURL.setValue(imageUrl);
          }

          // gravar 
          this.setUserInfo(uid); // enviar o uid do user cadastrado para setUserInfo

        })
        .catch(err => console.log("erro no cadastro do user : ", err))


    } else {
      
      this.recoverEmail( String(this.form.value.email))
    
     }

  }

  recoverEmail(email: string): void{
    this.firebaseService.sendRecoveryEmail(email)
      .then(resp => console.log("resposta: ", resp))
      .catch(err => console.log("erro no recover do email do firebase: ", err))
      .finally(()=>{
        this.utilsService.routerLink("/")
      })
  }


  async setUserInfo(uid: String) {
    let path = `users/${uid}`;//path com id do user cadastrado
    delete this.form.value.password; //deletar a senha do form

    //enviar registro 
    const pathDocument =  await this.firebaseService.setDocument(path, this.form.value)
      .then( async resp => {
        this.utilsService.saveInLocalStorage('user',this.form.value);
        this.utilsService.routerLink('/home');
        this.form.reset();
      })

  }



}