import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/main/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'signUp',
        component: SignUpComponent
    },
    {
        path: 'forgotPassword',
        component: ForgotPasswordComponent
    },
    {
        path: '**',
        redirectTo: 'auth',
        pathMatch: 'full'
    }
];
