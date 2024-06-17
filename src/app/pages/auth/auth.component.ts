import { BoundElementProperty } from '@angular/compiler';
import { Component } from '@angular/core';
import { BottomPrimaryComponent } from '../../components/primary-bottom/primary-bottom.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [BottomPrimaryComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
