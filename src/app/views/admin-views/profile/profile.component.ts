import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LOCALSTORAGE_KEYS } from 'src/app/common/constants/local-storage.constants';
import { IUser, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  userId!: string;

  userDetails!: IUser;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBarService: MatSnackBar,
    private router: Router) {
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

    if(!this.userId) {
      this.snackBarService.open('User ID not found', 'X', {
        direction: 'ltr',
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });

      setTimeout(() => {
        this.router.navigate(['login']);
      })
    }
    this.userService.getUserById(this.userId).subscribe((res:IUser) => {
      this.userDetails = res;
      this.profileForm.patchValue(res);
    },() => {
      this.snackBarService.open('Not able to get User details... Try again', 'X', {
        direction: 'ltr',
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    })
  }

  public updateProfile(): void {
    if(this.userDetails.email !== this.profileForm.value.email) {
      this.snackBarService.open('User email cant be changed', 'X', {
        direction: 'ltr',
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      this.getUserDetails();
      return;
    }
    this.userService.updateUserByUserId(this.userId, this.profileForm.value).subscribe((res) => {
      if(res) {
        this.snackBarService.open('User Updated Successfully', 'X', {
          direction: 'ltr',
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        this.userService.setUsername(`${this.profileForm.value?.firstname} ${this.profileForm.value?.lastname}`)
      }
    }, () => {
      this.snackBarService.open('Something went wrong... Try again', 'X', {
        direction: 'ltr',
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    })
  }
}
