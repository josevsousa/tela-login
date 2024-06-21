import { Component } from '@angular/core';
import { SectioncardComponent } from '../../../components/section-card/section-card.component';
import { InputPrimaryComponent } from '../../../components/input-primary/input-primary.component';
import { BottomPrimaryComponent } from '../../../components/primary-bottom/primary-bottom.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SectioncardComponent,
    InputPrimaryComponent,
    BottomPrimaryComponent    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
