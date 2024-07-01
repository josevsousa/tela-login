import {Component} from "@angular/core";

@Component({
    selector: 'toast-component',
    standalone: true,
    template: `
        <div class="main animate__animated">
            <h1>** Email ou Senha Invalido!! **</h1>
        </div>
    `,
    styleUrl: "./toast.component.scss" 
})

export class ToastComponent {}