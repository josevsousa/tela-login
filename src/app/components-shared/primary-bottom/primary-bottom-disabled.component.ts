import { Component, Input } from "@angular/core";
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'bottom-primary-disabled',
    standalone: true,
    imports: [UpperCasePipe],
    template: `
        <div class="button-disabled">{{ title | uppercase }}</div>
    `,
    styleUrl: "./primary-bottom.component.scss"
})

export class BottomPrimaryDisabledComponent {
    @Input('btn-title') title!: string;
}