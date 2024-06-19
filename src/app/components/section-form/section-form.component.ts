import { Component } from '@angular/core';
import { BottomPrimaryComponent } from '../primary-bottom/primary-bottom.component';
import { InputPrimaryComponent } from '../input-primary/input-primary.component';

@Component({
  selector: 'section-form',
  standalone: true,
  imports: [ BottomPrimaryComponent, InputPrimaryComponent ],
  templateUrl: './section-form.component.html',
})
export class SectionFormComponent {

}
