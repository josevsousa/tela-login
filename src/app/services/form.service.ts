import { Injectable } from "@angular/core";
import { Form } from "../interfaces/form.interface";
import { AbstractControl, FormGroup } from "@angular/forms";

@Injectable({ providedIn:'root' })

export class FormService {

   sendForm(form: string, tipoForm: string){

    console.log("tipo form: ", tipoForm);
    console.log(JSON.parse(form));
   }

}