import { Component } from '@angular/core';
import { SectioncardComponent } from '../../../components-shared/section-card/section-card.component';
import { RouterModule } from '@angular/router';
import { FormfullComponent } from '../../../components-shared/form-full/form-full.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    RouterModule,
    SectioncardComponent,
    FormfullComponent
  ],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {

}
