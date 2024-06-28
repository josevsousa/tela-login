import { Component, OnInit, inject } from '@angular/core';
import { SectioncardComponent } from '../../../components-shared/section-card/section-card.component';
import { RouterModule } from '@angular/router';
import { FormfullComponent } from '../../../components-shared/form-full/form-full.component';
import { UtilsService } from '../../../services/utils.service';
import { FirebaseService } from '../../../services/firebase.service';

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
  firebaseService = inject(FirebaseService);
  photoAvatar!: string | undefined;

  getImg(){
    return "background-image: url('"+this.photoAvatar+"');"
  }

  ngOnInit(): void {
    this.getImg();
    const photoURL = this.firebaseService.photoAvatar;
    if (photoURL) {
      this.photoAvatar = photoURL;
    } else {
      this.photoAvatar = "../../../assets/imagens/photo-user.png"; 
    }
  }

    // //=========== Tirar/Selecionar Photo ==========
    async takeImage(){
      let dataUrl = (await this.utilsService.takePicture('Sua Imagem para o app')).dataUrl;
      const photoAvatar = String(dataUrl);
      this.photoAvatar = photoAvatar;
      this.firebaseService.addPhotoAvatar(photoAvatar);
      console.log("bbbb :",this.firebaseService.photoAvatar);
    }
  
}
