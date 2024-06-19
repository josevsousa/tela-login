import { BoundElementProperty } from '@angular/compiler';
import { Component } from '@angular/core';
import { SectioncardComponent } from '../../components/section-card/section-card.component';
import { SectionFormComponent } from '../../components/section-form/section-form.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    SectioncardComponent,
    SectionFormComponent
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
