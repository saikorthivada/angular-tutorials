import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { LOCALSTORAGE_KEYS } from 'src/app/common/constants/local-storage.constants';
import { BaseClass } from 'src/app/common/utils/baseclass';
import { INote, NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent extends BaseClass implements OnInit {

  notesForm!: FormGroup;
  @ViewChild('resetBtn') resetBtn!: MatButton;

  @Input()
  id: string = '';

  currentNoteDetails!: INote;

  constructor(
    private notesService: NotesService) {
      super();
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
        this.toastService.openToast('User is invalid ... Please login');
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 2000);
      }
      const filteredNote = res.filter((obj: INote) => obj.id === this.id && obj.createdBy === userId);
      if (filteredNote.length <= 0) {
        this.toastService.openToast('No Notes found ...');
        setTimeout(() => {
          this.router.navigate(['notes']);
        }, 2000);
      } else {
        this.notesForm.patchValue(filteredNote[0]);
        this.currentNoteDetails = filteredNote[0];
      }
    }, () => {
      this.toastService.openToast('Something went wrong... Please try again');
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
          this.toastService.openToast('Note title already exist');
          return;
        } else {
          this.saveNotes(payload);
        }
    }, () => {
      this.toastService.openToast('Something went wrong... Please try again');
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
        this.toastService.openToast('Notes Updated successfully');
        this.currentNoteDetails = res;
      } else {
        this.toastService.openToast('Please try adding again ...');
      }
    }, () => {
      this.toastService.openToast('Something went wrong... Please try again');
    })
  }

  private saveNotes(payload: INote): void {
    this.notesService.addNotes(payload).subscribe((res: INote) => {
      if (res) {
        this.toastService.openToast('Notes Added successfully');
        this.resetBtn._elementRef.nativeElement.click();
      } else {
        this.toastService.openToast('Please try adding again ...');
      }
    }, () => {
      this.toastService.openToast('Something went wrong... Please try again');
    })
  }
}
