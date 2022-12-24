import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, ProfileComponent, HeaderComponent]
})
export class AppComponent {

  profileName = 'Default name';

  profileNameReceiver(name: string) {
    this.profileName = name;
    console.log(this.profileName);
  }
}
