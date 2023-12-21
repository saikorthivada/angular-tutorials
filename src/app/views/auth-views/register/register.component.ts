import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { BaseClass } from 'src/app/common/utils/baseclass';
import { REGULAR_EXPRESSIONS } from 'src/app/common/utils/regex-utils';
import { IUser, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseClass implements OnInit {
  registerForm!: FormGroup;
  isAgreed: boolean = false;
  isPasswordHidden: boolean =  true;
  @ViewChild('resetButton') resetButton!: MatButton;

  constructor(private userService: UserService) {
      super();
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(5)])],
      lastname: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(5)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(REGULAR_EXPRESSIONS.EMAIL)])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(REGULAR_EXPRESSIONS.PASSWORD)])],
      interested_topics: ['', Validators.compose([Validators.required])],
      mobileNumber: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])]
    })
  }

  register() {
    if(this.registerForm.valid && this.isAgreed) {
      this.userService.getAllUsers().subscribe((usersList: IUser[]) => {
        const userEmailExist = usersList.filter((obj: IUser) => obj.email === this.registerForm.value?.email).length > 0;
        if(userEmailExist) {
          this.toastService.openToast('User Already exist');
        } else{
          this.userService.createUser(this.registerForm.value).subscribe(() => {
            this.toastService.openToast('User created successfully');
            this.resetButton._elementRef.nativeElement?.click();
          })
        }
      })

    }
  }
}
