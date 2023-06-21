import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const childActivateGuard: CanActivateChildFn = (childRoute, state) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);

  console.log('token', token);

  if(token) {
    return true;
  } else {
    router.navigate(['auth', 'login']);
    return false;
  }
};
