import { Component, Input, OnInit, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { UtilsService } from '../../services/utils.service';
import { FirebaseService } from '../../services/firebase.service';



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
                        <h1>Ola {{name}}!</h1>
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
    firebaseService = inject(FirebaseService);

    photoUrl = "../../../assets/imagens/photo-user.png";
    name =  "Pessoa";

    async setPhoUrl(photoUrl: string){
        this.photoUrl = photoUrl;
    }

    ngOnInit(): void {
        
        const userGoogle = this.utilsService.getFromLocalStorage('userGoogle');

        // tipoCard pra mostrar o card do login
        if(!this.tipoCard){

            if(userGoogle){
                this.photoUrl = userGoogle.photoURL;
                this.name = userGoogle.displayName;                
            }else{    
                const user = this.utilsService.getFromLocalStorage('user');
                this.setPhoUrl(user.photoURL);
                this.name = user.displayName; 

            }
        }

    }

}