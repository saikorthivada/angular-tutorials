import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url:SafeUrl = ''
  onCodeChange(url: SafeUrl) {
    this.url = url;
  }
}
