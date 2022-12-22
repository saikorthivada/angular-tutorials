import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProfileComponent {

  profileName!: string;

  @Output()
  profileNameEmitter: EventEmitter<string> = new EventEmitter();

  updateProfileName() {
    this.profileNameEmitter.emit(this.profileName);
  }
}
