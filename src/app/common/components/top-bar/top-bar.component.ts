import { Component } from '@angular/core';
import { IButton } from 'src/app/common/componentsAsService/confirmation/confirmation.service';
import { UserService } from 'src/app/services/user.service';
import { BaseClass } from '../../utils/baseclass';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent extends BaseClass {
  constructor(public userService: UserService) {
    super();
  }

  public logout(): void {
    const buttons: IButton[] = [
      {
        label: 'No',
        callback: () => {
          console.log('call back from no');
        },
        color: 'accent'
      },
      {
        label: 'Yes',
        callback: () => this.logoutConfirmed(),
        color: 'primary'
      }
    ];
    this.confirmationService.showConfirmation('Logout confirmation','Are you sure to logout ?', buttons);
  }

  private logoutConfirmed(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
