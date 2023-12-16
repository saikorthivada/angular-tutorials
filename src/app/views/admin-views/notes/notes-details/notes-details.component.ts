import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LOCALSTORAGE_KEYS } from 'src/app/common/constants/local-storage.constants';
import { INote, NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent implements OnInit {

  notesForm!: FormGroup;
  @ViewChild('resetBtn') resetBtn!: MatButton;

  @Input()
  id: string = '';

  currentNoteDetails!: INote;

  constructor(private formBuilder: FormBuilder,
    private notesService: NotesService,
    private snackBarService: MatSnackBar,
    private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.id);
    this.initNotesForm();
    if (this.id) {
      this.getNoteDetailsOfCurrentUser();
    }
  }

  private getNoteDetailsOfCurrentUser(): void {
    this.currentNoteDetails = {} as INote;
    this.notesService.getAllNotes().subscribe((res: INote[]) => {
      const userId = localStorage.getItem(LOCALSTORAGE_KEYS.ID) ?? '';
      if (!userId) {
        this.showSnackbar('User is invalid ... Please login');
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 2000);
      }
      const filteredNote = res.filter((obj: INote) => obj.id === this.id && obj.createdBy === userId);
      if (filteredNote.length <= 0) {
        this.showSnackbar('No Notes found ...');
        setTimeout(() => {
          this.router.navigate(['notes']);
        }, 2000);
      } else {
        this.notesForm.patchValue(filteredNote[0]);
        this.currentNoteDetails = filteredNote[0];
      }
    }, () => {
      this.showSnackbar('Something went wrong... Please try again');
    })
  }

  private initNotesForm(): void {
    this.notesForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      createdBy: ['']
    });
  }

  public addOrUpdateNotes(): void {
    const payload = this.notesForm.value;
    if(this.id) {
      this.updateNotes(payload);
    } else {
      this.addNotes(payload);
    }
  }
  private addNotes(payload: INote): void {
    this.notesService.getAllNotes().subscribe((allNotes: INote[]) => {
        const filterednotes = allNotes.filter((obj: INote) => obj.title.toLowerCase().trim() === payload.title.toLowerCase().trim());
        if (filterednotes.length > 0) {
          this.showSnackbar('Note title already exist');
          return;
        } else {
          this.saveNotes(payload);
        }
    }, () => {
      this.showSnackbar('Something went wrong... Please try again');
    })
  }

  private updateNotes(payload: INote): void {
    payload = {
      ...this.currentNoteDetails,
      ...payload
    }
    console.log(payload);
    this.notesService.updateNotes(payload).subscribe((res: INote) => {
      if (res) {
        this.showSnackbar('Notes Updated successfully');
        this.currentNoteDetails = res;
      } else {
        this.showSnackbar('Please try adding again ...');
      }
    }, () => {
      this.showSnackbar('Something went wrong... Please try again');
    })
  }

  private saveNotes(payload: INote): void {
    this.notesService.addNotes(payload).subscribe((res: INote) => {
      if (res) {
        this.showSnackbar('Notes Added successfully');
        this.resetBtn._elementRef.nativeElement.click();
      } else {
        this.showSnackbar('Please try adding again ...');
      }
    }, () => {
      this.showSnackbar('Something went wrong... Please try again');
    })
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
