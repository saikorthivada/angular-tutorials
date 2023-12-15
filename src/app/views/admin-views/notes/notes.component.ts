import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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
    private router: Router) {
    // // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
      this.getAllNotes();
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

  private showSnackbar(message: string, content = 'X', duration = 3000) {
    this.snackBarService.open(message, content, {
      direction: 'ltr',
      duration: duration,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
}
