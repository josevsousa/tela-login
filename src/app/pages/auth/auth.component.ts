import { Component } from '@angular/core';
import { SectioncardComponent } from '../../components/section-card/section-card.component';
import { InputPrimaryComponent } from '../../components/input-primary/input-primary.component';
import { BottomPrimaryComponent } from '../../components/primary-bottom/primary-bottom.component';
import { BottomPrimaryDisabledComponent } from '../../components/primary-bottom/primary-bottom-disabled.component';

import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SectioncardComponent,
    InputPrimaryComponent,
    BottomPrimaryComponent,
    BottomPrimaryDisabledComponent
  ],
  templateUrl: './auth.component.html'
})
export class AuthComponent {

    form = new FormGroup({
      uid: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl('', [ Validators.email, Validators.required ]),
      password: new FormControl('', [ Validators.required ])
    })


    onSubmit(){
      console.log("passei aqui B");
      console.log(this.form.value);
    }

}
