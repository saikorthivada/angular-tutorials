import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmationComponent } from 'src/app/common/components/confirmation/confirmation.component';
import { LOCALSTORAGE_KEYS } from 'src/app/common/constants/local-storage.constants';
import { INote, NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'createdAt', 'updatedAt', 'Actions'];
  dataSource!: MatTableDataSource<INote>;
  pageSizes = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private notesService: NotesService, private snackBarService: MatSnackBar,
    private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
      this.getAllNotes();
  }

  public deleteConfirmation(note:INote): void {
    this.dialog.open(ConfirmationComponent, {
      minWidth: '400px',
      disableClose: true,
      data: {
        title: 'Delete confirmation',
        message: 'Are you sure... you want to delete note ?',
        buttons: [
          {
            label: 'No',
            callback: () => {
              console.log('call back from no');
            },
            color: 'accent'
          },
          {
            label: 'Delete',
            callback: () => this.deleteConfirmed(note),
            color: 'primary'
          }
        ]
      }
    })
  }

  private deleteConfirmed(note: INote): void {
    this.notesService.deleteNote(note.id as string).subscribe((res: INote) => {
      if(res) {
        this.showSnackbar('Note deleted successfully');
        this.getAllNotes();
      } else {
        this.showSnackbar('Note deletion failed... Try again');
      }
    }, () => {
      this.showSnackbar('Something went wrong... Please try again');
    })
  }

  public isTableVisible(): boolean {
    if(this.dataSource?.data?.length) {
      return this.dataSource.data.length > 0;
    }
    return false;

  }

  private getAllNotes(): void {
    this.notesService.getAllNotes().subscribe((res: INote[]) => {
      const userId = localStorage.getItem(LOCALSTORAGE_KEYS.ID) ?? '';
      if(!userId) {
        this.showSnackbar('User does not exist ...');
        localStorage.clear();
        this.router.navigate(['login']);
      } else {
        const filteredData = res.filter((obj: INote) => obj.createdBy === userId);
        this.dataSource = new MatTableDataSource(filteredData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public editNote(note: INote): void {
    this.router.navigate(['notes', 'details', note.id as string]);
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
