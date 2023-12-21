import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { LOCALSTORAGE_KEYS } from 'src/app/common/constants/local-storage.constants';
import { BaseClass } from 'src/app/common/utils/baseclass';
import { REGULAR_EXPRESSIONS } from 'src/app/common/utils/regex-utils';
import { IUser, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseClass implements OnInit {
  isPasswordHidden = true;

  loginForm!: FormGroup;

  constructor(
    private userService: UserService) {
    super();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(REGULAR_EXPRESSIONS.EMAIL)])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.userService.getAllUsers().subscribe((userList: IUser[]) => {
        const filteredUsers = userList
          .filter((obj: IUser) =>
            obj.email === this.loginForm.value?.email && obj.password === this.loginForm.value?.password);

        if (filteredUsers.length > 0) {
          localStorage.setItem(LOCALSTORAGE_KEYS.ID, filteredUsers[0]?.id ?? '');
          localStorage.setItem(LOCALSTORAGE_KEYS.UUID, filteredUsers[0]?.uuid ?? '');
          this.userService.setUsername(`${filteredUsers[0].firstname} ${filteredUsers[0].lastname}`);
          this.router.navigate(['dashboard']);
        } else {
          this.toastService.openToast('Invalid User Credentials');
        }
      })
    }
  }
}
