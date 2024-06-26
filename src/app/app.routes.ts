import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/main/home/home.component';
import { AuthGuard } from './guardRouters/auth.guard';
import { NoAuthGuard } from './guardRouters/no-auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate:[NoAuthGuard]
    },
    {
        path: 'signUp',
        component: SignUpComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'forgotPassword',
        component: ForgotPasswordComponent,
        canActivate:[AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'auth',
        pathMatch: 'full'
    }
];
