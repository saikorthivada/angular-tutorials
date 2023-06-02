import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanLoadService {

  constructor() { }

  canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Decide weather the modules should be loaded or not by returning true or false
    return true;
  }
}
