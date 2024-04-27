import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const route = inject(Router)
  if(authService.isAuthenticated()){
     return true;
  }
  else{
     route.navigate(["/"]);
     return false
  }
};
