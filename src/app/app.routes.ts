import { Routes } from '@angular/router';
import { LoginComponent } from '../core/login/login.component';
import { RegisterComponent } from '../core/register/register.component';

export const routes: Routes = [
    { path: 'signIn', component: LoginComponent},
    { path: 'signUp', component: RegisterComponent},
    { path: 'airtel-money', loadComponent: () => import('../feature/airtel-money/airtel-money.component').then( (feature) => feature.AirtelMoneyComponent)},
    { path: 'mpesa', loadComponent: () => import('../feature/mpesa/mpesa.component').then( (feature) => feature.MpesaComponent)}
];
