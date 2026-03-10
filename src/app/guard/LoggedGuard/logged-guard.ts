import { inject } from '@angular/core';
import { AuthService } from '../../services/AuthService/auth-service';
import { CanActivateFn, Router } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) =>
{
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.isLoggedIn() ? true : router.navigate(['/login']);
};
