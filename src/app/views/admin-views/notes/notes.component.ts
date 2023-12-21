import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LOCALSTORAGE_KEYS } from 'src/app/common/constants/local-storage.constants';
import { IButton } from 'src/app/common/componentsAsService/confirmation/confirmation.service';
import { INote, NotesService } from 'src/app/services/notes.service';
import { BaseClass } from 'src/app/common/utils/baseclass';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent extends BaseClass implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'createdAt', 'updatedAt', 'Actions'];
  dataSource!: MatTableDataSource<INote>;
  pageSizes = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private notesService: NotesService) {
    super();
  }

  ngOnInit(): void {
      this.getAllNotes();
  }

  public deleteConfirmation(note:INote): void {
    const buttons: IButton[] = [
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
    this.confirmationService.showConfirmation('Delete confirmation', 'Are you sure... you want to delete note ?', buttons);
  }

  private deleteConfirmed(note: INote): void {
    this.notesService.deleteNote(note.id as string).subscribe((res: INote) => {
      if(res) {
        this.toastService.openToast('Note deleted successfully');
        this.getAllNotes();
      } else {
        this.toastService.openToast('Note deletion failed... Try again');
      }
    }, () => {
      this.toastService.openToast('Something went wrong... Please try again');
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
        this.toastService.openToast('User does not exist ...');
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
}
