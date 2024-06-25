import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  
  router = inject(Router);


  // ============ Evia a qualquer pagina disponivel =============
  routerLink(url: string) {
    return this.router.navigateByUrl(url); 
  }
   

  // ============ Guarda um elemento no localstore  =============
  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  // ============ Obtem um elemento no localstore  =============
  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }
  // ============ Deleta um elemento no localstore  =============
  delFromLocalStorage(key: string) {
    return localStorage.removeItem(key);
  }

      // ========== Camera ==========
      takePicture(promptLabelHeader: string) {
        return  Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.DataUrl,
            source: CameraSource.Prompt,
            promptLabelHeader,
            promptLabelPhoto: 'Selecione uma imagen',
            promptLabelPicture: 'Toma uma photo'
        });
    };

}
