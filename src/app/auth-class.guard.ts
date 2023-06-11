import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthClassGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    console.log(route);
    console.log(state);
    // const router = inject(Router);
    console.log('Im in auth guard');
    console.log('token', token);
    if (token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
