import { Component } from '@angular/core';
import { SectioncardComponent } from '../../../components/section-card/section-card.component';
import { InputPrimaryComponent } from '../../../components/input-primary/input-primary.component';
import { BottomPrimaryComponent } from '../../../components/primary-bottom/primary-bottom.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    RouterModule,
    SectioncardComponent,
    InputPrimaryComponent,
    BottomPrimaryComponent ],
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {

}
