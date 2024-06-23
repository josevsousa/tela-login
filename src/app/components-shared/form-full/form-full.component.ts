import { Component, inject, Input, OnInit} from "@angular/core";
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputPrimaryComponent } from "../input-primary/input-primary.component";
import { BottomPrimaryComponent } from "../primary-bottom/primary-bottom.component";
import { BottomPrimaryDisabledComponent } from "../primary-bottom/primary-bottom-disabled.component";

import { FormService } from '../../services/form.service';

@Component({
    selector: 'form-full',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, InputPrimaryComponent, BottomPrimaryComponent, BottomPrimaryDisabledComponent],
    template: `
      <form [formGroup]="form">

          @if(formTipo == 'registrar') {
            <input-primary inp-title="name" [control]="form.controls.name"></input-primary>
          }
          <input-primary inp-title="email" [control]="form.controls.email"></input-primary>
          @if(formTipo != 'recuperar'){
            <input-primary inp-title="password" [control]="form.controls.password"></input-primary>
          }
          @if (form.valid) {
            <bottom-primary btn-title="{{formTipo}}" (click)="onSubmit()"></bottom-primary>
          }@else {
          <bottom-primary-disabled btn-title="{{formTipo}}"></bottom-primary-disabled>
          }

      </form>
    `
})

export class FormfullComponent implements OnInit{

    @Input('form-tipo') formTipo!: string;
    
    formService = inject(FormService);

    ngOnInit(){
        if(this.formTipo == 'recuperar'){
            this.form.patchValue({password: 'recuperar'});
        }
    }

    form = new FormGroup({
        uid: new FormControl(''),
        name: new FormControl(''),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)

    })

    onSubmit(){
      
        const formJson = JSON.stringify(this.form.value)
        this.formService.sendForm( formJson, this.formTipo);
        
      }

    

}