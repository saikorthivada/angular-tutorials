import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateChildService {

  constructor() { }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Decides's weather child routes can be accessed or not by returning true or false
    return true;
  }
}
