import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LOCALSTORAGE_KEYS } from 'src/app/common/constants/local-storage.constants';
import { REGULAR_EXPRESSIONS } from 'src/app/common/utils/regex-utils';
import { IUser, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm!: FormGroup;
  currentPasswordHidden: boolean = true;
  newPasswordHidden: boolean = true;
  confirmPasswordHidden: boolean = true;
  passwordMatch: boolean | null = null;

  @ViewChild('resetBtn') resetBtn!: MatButton;

  constructor(private formBuilder: FormBuilder,
    private snackBarService: MatSnackBar,
    private userService: UserService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.initiateForm();
  }

  private initiateForm(): void {
    this.resetForm = this.formBuilder.group({
      currentPassword: [''],
      newPassword: ['', Validators.compose([Validators.required, Validators.pattern(REGULAR_EXPRESSIONS.PASSWORD)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.pattern(REGULAR_EXPRESSIONS.PASSWORD)])]
    });
    this.resetForm.valueChanges.subscribe((res) => {
      if ((res.newPassword || res.confirmPassword) && res.newPassword === res.confirmPassword) {
        this.passwordMatch = true;
      } else {
        this.passwordMatch = false;
      }
    })
  }

  public resetPassword(): void {
    const payload = this.resetForm.value;
    if (payload?.currentPassword !== payload.newPassword || payload?.currentPassword !== payload.confirmPassword) {
      if (payload?.newPassword === payload.confirmPassword) {
        const userId = localStorage.getItem(LOCALSTORAGE_KEYS.ID) ?? '';
        if (!userId) {
          this.showSnackbar('User Id does not exist... Please login');
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 2000);
        } else {
          this.checkPassword();
        }
      } else {
        this.showSnackbar('New passsword should match the confirm password');
      }
    } else {
      this.showSnackbar('Current password should not be eqal to new password');
    }
  }

  private checkPassword(): void {
    const payload = this.resetForm.value;
    const userId = localStorage.getItem(LOCALSTORAGE_KEYS.ID) ?? '';
    this.userService.getUserById(userId).subscribe((res: IUser) => {
      const storedPassword = res.password;
      if (storedPassword === payload.currentPassword) {
        this.updatePasswordInAPI();
      } else {
        this.showSnackbar('Current password does not match');
      }
    })
  }

  private updatePasswordInAPI(): void {
    const payload = this.resetForm.value;
    const userId = localStorage.getItem(LOCALSTORAGE_KEYS.ID) ?? '';
    this.userService.updatePasswordByUserId(userId, payload.newPassword).subscribe((res: IUser) => {
      this.showSnackbar('Password updated successfully');
      this.resetBtn._elementRef.nativeElement.click();
      this.passwordMatch = null;
    }, (error: any) => {
      this.showSnackbar('Something went wrong');
    });
  }


  private showSnackbar(message: string, content = 'X', duration = 3000) {
    this.snackBarService.open(message, content, {
      direction: 'ltr',
      duration: duration,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
}
