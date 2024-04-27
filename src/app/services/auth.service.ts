import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private uid? :string;
  constructor(private router:Router) {
    const auth = getAuth();
   onAuthStateChanged(auth, (user) => {
  if (user) {
    this.uid = user.uid;
    console.log("User log in sucessfully",user.email);
    
  } else {
    this.uid = undefined;
    this.router.navigate(["/"])
    console.log("User logout sucessfuly");
    
  }
});
  }

   isAuthenticated(){
     return this.uid? true : false;
   }
   getUid(){
     return this.uid;
   }

  registerUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
    const user = userCredential.user;
    console.log({user});
    console.log("user registered sucessfully");
    this.router.navigate(["/"])
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    alert("please check invalid credential while signup")
  });
  }

  loginuser(email: string, password: string) {
   
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
     console.log({user});
     console.log("user login successfull");
     
     this.router.navigate(["/"])
     
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    alert("please check invalid credential while login")
  });
  }

  logout(){
    const auth = getAuth();
    this.uid = undefined;
    signOut(auth).catch((error) => {
      alert("something went wrong while logout")
     
})
  }
}
