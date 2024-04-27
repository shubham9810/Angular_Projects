import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CreatebinComponent } from './components/createbin/createbin.component';
import { firebaseConfig } from '../../firebaseConfig';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,LoginComponent,SignupComponent,CreatebinComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
   constructor(){
      initializeApp(firebaseConfig)
   }
}

