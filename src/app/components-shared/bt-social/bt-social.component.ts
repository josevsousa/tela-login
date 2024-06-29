import { Component, Input} from "@angular/core";


@Component({
    selector: 'bt-social',
    standalone: true,
    template: `
        <button class="bt-social">
            <img src="../../../assets/icons/google.svg">
            <h3>{{btTitle}}</h3>
        </button> 
    `,
    styleUrl: './bt-social.component.scss'
    
})

export class BtSocialComponent {
    @Input("bt-title") btTitle!: string; 
}

