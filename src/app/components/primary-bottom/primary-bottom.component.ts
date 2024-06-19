import { UpperCasePipe } from '@angular/common';
import {Component, EventEmitter, Input, Output, Pipe} from '@angular/core';

@Component({
    selector: 'bottom-primary',
    standalone: true,
    imports: [ UpperCasePipe ],
    template: `
        <button>
            @if (!loading) {
                {{ title | uppercase }}
            }@else {
                carregando...   
            }
        </button>
    `,
    styleUrl: "./primary-bottom.component.scss"
})

export class BottomPrimaryComponent{
    @Input('btn-title') title!: string;
    @Input() disabled: boolean = false;
    @Input() loading: boolean = false;
    
    @Output("submit") onSubmit = new EventEmitter();

    submit(){
        this.onSubmit.emit();
    }
}