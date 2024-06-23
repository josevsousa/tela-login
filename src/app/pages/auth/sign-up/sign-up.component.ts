import { Component } from '@angular/core';
import { SectioncardComponent } from '../../../components-shared/section-card/section-card.component';
import { RouterModule } from '@angular/router';
import { FormfullComponent } from '../../../components-shared/form-full/form-full.component';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    RouterModule,
    SectioncardComponent,
    FormfullComponent
  ],
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {

}
