import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { LOCALSTORAGE_KEYS } from 'src/app/common/constants/local-storage.constants';
import { BaseClass } from 'src/app/common/utils/baseclass';
import { INote, NotesService } from 'src/app/services/notes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseClass implements OnInit {
  counts = {
    allUsers: 0,
    allNotes: 0,
    myNotes: 0
  };
  constructor(private userService: UserService, private notesService: NotesService) {
    super();
  }

  ngOnInit(): void {
    const allQueries = [
      this.userService.getAllUsers(),
      this.notesService.getAllNotes()
    ];
    forkJoin(allQueries).subscribe((res) => {
      console.log(res);
      const userId = localStorage.getItem(LOCALSTORAGE_KEYS.ID) ?? '';
      if (!userId) {
        this.toastService.openToast('User does not exist ... Please login');
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 2000);
      } else {
        const filteredNotes = (res[1] as Array<INote>).filter((obj: INote) => obj.createdBy === userId);
        this.counts = {
          allUsers: res[0].length,
          allNotes: res[1].length,
          myNotes: filteredNotes.length
        }
      }

    }, () => {
      this.toastService.openToast('something went wrong.... Please try again');
    });
  }
}
