import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LOCALSTORAGE_KEYS } from '../common/constants/local-storage.constants';

export interface INote {
  id?: string;
  title: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private ENDPOINT = 'notes';
  private notesUrl = `${environment.BASE_URL}${this.ENDPOINT}`;
  constructor(private http: HttpClient) { }

  public addNotes(payload: INote): Observable<any> {
    payload.createdBy = localStorage.getItem(LOCALSTORAGE_KEYS.ID) ?? '';
    payload.createdAt = (new Date()).toString();
    payload.updatedAt = (new Date()).toString();
    return this.http.post(this.notesUrl, payload) as Observable<any>;
  }

  public getAllNotes(): Observable<INote[]> {
    return this.http.get(this.notesUrl) as Observable<INote[]>;
  }

  public deleteNote(noteId: string): Observable<INote> {
    return this.http.delete(`${this.notesUrl}/${noteId}`) as Observable<INote>;
  }

  public updateNotes(payload: INote): Observable<any> {
    payload.updatedAt = (new Date()).toString();
    return this.http.put(`${this.notesUrl}/${payload.id}`, payload) as Observable<any>;
  }
}
