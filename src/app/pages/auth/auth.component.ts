import { BoundElementProperty } from '@angular/compiler';
import { Component } from '@angular/core';
import { BottomPrimaryComponent } from '../../components/primary-bottom/primary-bottom.component';
import { SectioncardComponent } from '../../components/section-card/section-card.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    BottomPrimaryComponent,
    SectioncardComponent
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
