import { Component } from '@angular/core';
import { SectioncardComponent } from '../../../components/section-card/section-card.component';
import { InputPrimaryComponent } from '../../../components/input-primary/input-primary.component';
import { BottomPrimaryComponent } from '../../../components/primary-bottom/primary-bottom.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    RouterModule,
    SectioncardComponent,
    InputPrimaryComponent,
    BottomPrimaryComponent],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {

}
