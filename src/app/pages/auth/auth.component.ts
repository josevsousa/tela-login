import { BoundElementProperty } from '@angular/compiler';
import { Component } from '@angular/core';
import { SectioncardComponent } from '../../components/section-card/section-card.component';
import { InputPrimaryComponent } from '../../components/input-primary/input-primary.component';
import { BottomPrimaryComponent } from '../../components/primary-bottom/primary-bottom.component';
import {  RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    SectioncardComponent,
    InputPrimaryComponent,
    BottomPrimaryComponent,
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
