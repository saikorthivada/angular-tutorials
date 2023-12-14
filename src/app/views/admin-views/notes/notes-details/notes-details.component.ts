import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { INote, NotesService } from 'src/app/services/notes.service';
import { IUser } from 'src/app/services/user.service';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent implements OnInit {

  notesForm!: FormGroup;
  @ViewChild('resetBtn') resetBtn!: MatButton;
  constructor(private formBuilder: FormBuilder,
    private notesService: NotesService,
    private snackBarService: MatSnackBar) {
  }

  ngOnInit(): void {
    this.initNotesForm();
  }

  private initNotesForm(): void {
    this.notesForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      createdBy: ['']
    })
  }

  public addNotes(): void {
    this.notesService.getAllNotes().subscribe((allNotes: INote[]) => {
      const payload = this.notesForm.value;
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
