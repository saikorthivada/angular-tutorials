import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDeactivateGuardClassGuard implements CanDeactivate<any> {
  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component && component?.username && component?.username?.dirty) {
      console.log(currentRoute);
      console.log(currentState);
      console.log(nextState);
      const confirmation = confirm('You have some unsaved detaials. Are you sure to go back from class guard?');
      if (confirmation) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

}
