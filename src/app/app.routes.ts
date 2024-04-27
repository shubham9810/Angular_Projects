import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreatebinComponent } from './components/createbin/createbin.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [

    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"navbar",component:NavbarComponent},
    {path:"createbin",component:CreatebinComponent,canActivate:[authGuard]},
    {path:"about",loadComponent:()=>import('./components/about/about.component').then(mod => mod.AboutComponent)},
    {path:"", redirectTo:"/login" ,pathMatch:"full"},
    {path:"**",component:NotFoundComponent},
];
