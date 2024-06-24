import { Component, Input, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgClass } from '@angular/common';
import { UtilsService } from '../../services/utils.service';


@Component({
    selector: 'section-card',
    standalone: true,
    imports: [NgClass],
    template: `
       <section class="card-wrapper">
            <div class="card-image" style="background-image: url('../../../assets/imagens/card-image-1.png');"></div>
            <div class="card-main">
                    <div [ngClass]="tipoCard ? '' : 'img-wrapper'">
                        <img src="{{photoUrl}}">
                    </div>
                        <h1>Ola {{displayName}}!</h1>
                    <p>Seja bem vindo a ess aplicação de tela de login!</p>
               
            </div>

            <div class="card-footer">
                <p>------- # ---------</p>
                   <a href="http://josevicentedesousa.netlify.app">Dev: josevicentedesousa.netlify.app</a>
            </div>

        </section>
    `,
    styleUrl: "./section-card.component.scss"
})

export class SectioncardComponent implements OnInit {
    @Input() tipoCard: boolean = true;

    utilsService = inject(UtilsService);

    photoUrl: string = "../../../assets/logo.svg";
    displayName: string = "pessoa";

    ngOnInit(): void {
        if(!this.tipoCard){
            const user =  JSON.parse(this.utilsService.getFromLocalStorage('user'));
            console.log("--------- ", user);
            this.photoUrl = user.photoUrl;
            this.displayName = user.displayName;
        }
    }

}