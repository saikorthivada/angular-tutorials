import { Injectable } from '@angular/core';
import { AppDialogComponent } from './app-dialog.component';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable()
export class AppDialogService {

  constructor(private dialog: MatDialog) { }

  public openDialog(title: string, message: string, okButton: string): Observable<boolean> {
    let dialogRef: MatDialogRef<AppDialogComponent>;
    dialogRef = this.dialog.open(AppDialogComponent, {
      width: '380px',
      panelClass: 'appdialogcontainer',
      disableClose: true,
      data: { title, message, okButton }
    });
    return dialogRef.afterClosed();
  }
}
