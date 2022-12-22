import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-two-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-two-standalone.component.html',
  styleUrls: ['./child-two-standalone.component.scss']
})
export class ChildTwoStandaloneComponent {

}
