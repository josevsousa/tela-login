import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-primary',
  standalone: true,
  imports: [],
  templateUrl: './input-primary.component.html',
  styleUrl: './input-primary.component.scss'
})
export class InputPrimaryComponent {

  @Input('inp-title') title!: string;

}
