import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationComponent } from './confirmation.component';

export interface IButton {
  label: string;
  callback?: () => void;
  color?: string;
}
@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private dialog: MatDialog) { }

  public showConfirmation(title: string, message: string, buttons: IButton[], config?: MatDialogConfig): void {
    this.dialog.open(ConfirmationComponent, {
      minWidth: config?.minWidth ? config?.minWidth : '400px',
      disableClose: config?.disableClose ? config?.disableClose : true,
      data: {
        title,
        message,
        buttons
      }
    })
  }
}
