import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackBarService: MatSnackBar) { }

  public openToast(message: string, content = 'X', duration = 3000) {
    this.snackBarService.open(message, content, {
      direction: 'ltr',
      duration: duration,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
}
