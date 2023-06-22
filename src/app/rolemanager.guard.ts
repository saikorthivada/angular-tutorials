import { CanMatchFn } from '@angular/router';

export const rolemanagerGuard: CanMatchFn = (route, segments) => {
  const role = localStorage.getItem('role');
  console.log(role);
  if(role && role === 'ADMIN') {
    return true;
  }
  return false;
};
