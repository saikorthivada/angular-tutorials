import { Component, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import {LOCALSTORAGE_KEYS} from './../../constants/local-storage.constants';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  constructor(private dialog: MatDialog, private router: Router, public userService: UserService) {
    // this.userName = this.userService.getUserName() ?? 'User Name';
  }

  public logout(): void {
    this.dialog.open(ConfirmationComponent, {
      minWidth: '400px',
      disableClose: true,
      data: {
        title: 'Logout confirmation',
        message: 'Are you sure to logout ?',
        buttons: [
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
        ]
      }
    })
  }

  private logoutConfirmed(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
