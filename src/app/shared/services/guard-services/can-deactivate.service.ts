import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
interface CanDeactivate<T> {
  canDeactivate(component: T,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
}
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService implements CanDeactivate<CanComponentDeactivate> {

  private canExit = true;
  // Decide's weather to deactivate or not by returning true or false
  canDeactivate(component: CanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      if (!this.canExit) {
       const isConfirmed = window.confirm('Please make sure before you exit');
        return isConfirmed;
      } else {
        return true;
      }
  }

  // set's the exit status of a route
  setExitStatus(exit: boolean) {
    this.canExit = exit;
  }

  // get exit status of a route
  getExitStatus() {
    return this.canExit;
  }
}
