import { Component, inject } from '@angular/core';
import { SectioncardComponent } from '../../../components-shared/section-card/section-card.component';
import { InputPrimaryComponent } from '../../../components-shared/input-primary/input-primary.component';
import { BottomPrimaryComponent } from '../../../components-shared/primary-bottom/primary-bottom.component';
import { RouterLink } from '@angular/router';
import { FirebaseService } from '../../../services/firebase.service';

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
  authService = inject(FirebaseService);
  
  desconectar(): void {
    this.authService.desconectarGoogle();
  }

}
