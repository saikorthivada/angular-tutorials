import { CanDeactivateFn } from '@angular/router';

export const formDeactiveGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  console.log(component);
  if(component && component?.username && component?.username?.dirty) {
    const confirmation = confirm('You have some unsaved detaials. Are you sure to go back ?');
    if(confirmation) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};
