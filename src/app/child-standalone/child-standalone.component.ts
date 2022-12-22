import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildModularComponent } from '../child-modular/child-modular.component';
import { SharedModule } from '../shared/shared.module';
import { ChildTwoStandaloneComponent } from '../child-two-standalone/child-two-standalone.component';

@Component({
  selector: 'app-child-standalone',
  standalone: true,
  imports: [CommonModule, SharedModule, ChildTwoStandaloneComponent],
  templateUrl: './child-standalone.component.html',
  styleUrls: ['./child-standalone.component.scss']
})
export class ChildStandaloneComponent {

}
