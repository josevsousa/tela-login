import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from './environments/envirionment';


import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';

import { getAuth, provideAuth } from '@angular/fire/auth';

import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);


export const appConfig: ApplicationConfig = {
  providers: 
    [ 
      provideRouter(routes), 
      provideFirebaseApp( () => initializeApp(environment.firebaseConfig)),
      importProvidersFrom(AngularFireModule.initializeApp(environment.firebaseConfig)), 
      provideAuth(() => getAuth()),
    ] 
};
