import { Component, OnInit, inject } from '@angular/core';
import { SectioncardComponent } from '../../../components-shared/section-card/section-card.component';
import { RouterModule } from '@angular/router';
import { FormfullComponent } from '../../../components-shared/form-full/form-full.component';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    RouterModule,
    SectioncardComponent,
    FormfullComponent
  ],
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

  utilsService = inject(UtilsService);
  photoAvatar: string | undefined = "../../../assets/imagens/photo-user.png";

  getImg(){
    return "background-image: url('"+this.photoAvatar+"');"
  }

  ngOnInit(): void {
    this.getImg();
  }

    //=========== Tirar/Selecionar Photo ==========
    async takeImage(){
      let dataUrl = (await this.utilsService.takePicture('Image do produto')).dataUrl;
      this.photoAvatar = dataUrl;
    }
  
}
