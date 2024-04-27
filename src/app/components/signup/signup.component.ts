import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
       
  constructor(private authService:AuthService){
     
  }
    

     signup(signupForm : NgForm){
        this.authService.registerUser(signupForm.value.email,signupForm.value.password);
        
     }
     reset(signupForm : NgForm){
         signupForm.reset();
         console.log("reset done");
         
     }
 }


