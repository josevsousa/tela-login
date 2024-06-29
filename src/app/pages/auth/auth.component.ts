import { Component, inject } from '@angular/core';
import { SectioncardComponent } from '../../components-shared/section-card/section-card.component';

import {  Router, RouterModule } from '@angular/router';
import { FormfullComponent } from '../../components-shared/form-full/form-full.component';
import { FirebaseService } from '../../services/firebase.service';
import { BtSocialComponent } from '../../components-shared/bt-social/bt-social.component';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterModule,
    SectioncardComponent,
    FormfullComponent,
    BtSocialComponent
  ],
  templateUrl: './auth.component.html',
  styles: `.section-social a{ cursor: pointer}`
})
export class AuthComponent {

  auth = inject(FirebaseService);

  onSubmit(): void{
    this.auth.loginGoogle();
  }
  logout(): void{
    this.auth.desconectarGoogle()
  }

}
