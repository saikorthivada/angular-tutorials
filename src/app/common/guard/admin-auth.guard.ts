import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LOCALSTORAGE_KEYS } from '../constants/local-storage.constants';
import { UserService } from '../../services/user.service';

export const adminAuthGuard: CanActivateFn = async (route, state) => {
  const userId = localStorage.getItem(LOCALSTORAGE_KEYS.ID) ?? '';
  const router = inject(Router);
  const userService = inject(UserService);
  if (!userId) {
    router.navigate(['login']);
    return false;
  }
  try {
    const data = await userService.getUserById(userId).toPromise();
    if (data) {
      return true;
    } else {
      router.navigate(['login']);
      return false;
    }
  }
  catch (e) {
    router.navigate(['login']);
    return false;
  }
};
