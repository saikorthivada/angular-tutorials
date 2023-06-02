import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService {
  private canLogin = true; // Used for activating and deactivating the children components
  constructor(private _router: Router) { }

  // Decide's weather the route need to be activated or not by returinging true or false
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.canLogin) {
      return true;
    } else {
      this._router.navigate(['login']);
    }
  }

  // set's can activate status
  setLoginStatus(isLogin: boolean) {
    this.canLogin = isLogin;
  }
  // get's can activate status
  getLoginStatus() {
    return this.canLogin;
  }
}
