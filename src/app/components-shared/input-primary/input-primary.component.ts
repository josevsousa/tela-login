import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'input-primary',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './input-primary.component.html',
  styleUrl: './input-primary.component.scss'
})
export class InputPrimaryComponent {

  @Input() control!: FormControl;
  @Input('inp-title') title!: string;

}
