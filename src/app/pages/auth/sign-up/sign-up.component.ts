import { Component } from '@angular/core';
import { SectioncardComponent } from '../../../components/section-card/section-card.component';
import { SectionFormComponent } from '../../../components/section-form/section-form.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SectioncardComponent, SectionFormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
