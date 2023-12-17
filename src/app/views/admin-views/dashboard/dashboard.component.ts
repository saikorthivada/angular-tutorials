import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { LOCALSTORAGE_KEYS } from 'src/app/common/constants/local-storage.constants';
import { INote, NotesService } from 'src/app/services/notes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  counts = {
    allUsers: 0,
    allNotes: 0,
    myNotes: 0
  };
  constructor(private userService: UserService, private notesService: NotesService,
    private snackBarService: MatSnackBar,
    private router: Router) {
  }

  ngOnInit(): void {
    const allQueries = [
      this.userService.getAllUsers(),
      this.notesService.getAllNotes()
    ];
    forkJoin(allQueries).subscribe((res) => {
      console.log(res);
      const userId = localStorage.getItem(LOCALSTORAGE_KEYS.ID) ?? '';
      if(!userId) {
        this.showSnackbar('User does not exist ... Please login');
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 2000);
      } else {
        const filteredNotes = (res[1] as Array<INote>).filter((obj:INote) => obj.createdBy === userId);
        this.counts = {
          allUsers: res[0].length,
          allNotes: res[1].length,
          myNotes: filteredNotes.length
        }
      }

    }, () => {
      this.showSnackbar('something went wrong.... Please try again');
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
