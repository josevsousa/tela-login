import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/main/home/home.component';
import { authGuard } from './guardRouters/auth.guard';
import { noAuthGuard } from './guardRouters/no-auth.guard'

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthComponent,
        canActivate:[authGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate:[noAuthGuard]
    },
    {
        path: 'signUp',
        component: SignUpComponent,
        canActivate:[authGuard]
    },
    {
        path: 'forgotPassword',
        component: ForgotPasswordComponent,
        canActivate:[authGuard]
    },
    {
        path: '**',
        redirectTo: 'auth',
        pathMatch: 'full'
    }
];
