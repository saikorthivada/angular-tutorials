import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { LOCALSTORAGE_KEYS } from 'src/app/common/constants/local-storage.constants';
import { BaseClass } from 'src/app/common/utils/baseclass';
import { IUser, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends BaseClass implements OnInit {
  profileForm!: FormGroup;
  userId!: string;

  userDetails!: IUser;
  constructor(
    private userService: UserService) {
    super();
    this.userId = localStorage.getItem(LOCALSTORAGE_KEYS.ID) ?? '';
  }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      firstname: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(5)])],
      lastname: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(5)])],
      email: [''],
      interested_topics: ['', Validators.compose([Validators.required])],
      mobileNumber: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])]
    });
    this.getUserDetails();
  }

  getUserDetails(): void {

    if (!this.userId) {
      this.toastService.openToast('User ID not found');

      setTimeout(() => {
        this.router.navigate(['login']);
      })
    }
    this.userService.getUserById(this.userId).subscribe((res: IUser) => {
      this.userDetails = res;
      this.profileForm.patchValue(res);
    }, () => {
      this.toastService.openToast('Not able to get User details... Try again');
    })
  }

  public updateProfile(): void {
    if (this.userDetails.email !== this.profileForm.value.email) {
      this.toastService.openToast('User email cant be changed');
      this.getUserDetails();
      return;
    }
    this.userService.updateUserByUserId(this.userId, this.profileForm.value).subscribe((res) => {
      if (res) {
        this.toastService.openToast('User Updated Successfully');
        this.userService.setUsername(`${this.profileForm.value?.firstname} ${this.profileForm.value?.lastname}`)
      }
    }, () => {
      this.toastService.openToast('Something went wrong... Try again',);
    })
  }
}
