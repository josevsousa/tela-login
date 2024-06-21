import { Component, Input } from '@angular/core';

@Component({
    selector: 'section-card',
    standalone: true,
    template: `
       <section class="card-wrapper">
            <div class="card-image" style="background-image: url('../../../assets/imagens/card-image-1.png');"></div>
            <div class="card-main">
                <img src="../../../assets/logo.svg">
                <h1>Dev Freela</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Tortor varius suspendisse arcu amet scelerisque tincidunt neque
                    posuere. Vehicula lectus eget</p>
            </div>

            <div class="card-footer">
                <p>------- # ---------</p>
                <h2>Dev: josevicentedesousa.surge.sh</h2>
            </div>

        </section>
    `,
    styleUrl: "./section-card.component.scss"
})

export class SectioncardComponent {
    @Input() tipoCard!: string;
}