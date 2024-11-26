import { Component, computed, input, OnChanges, SimpleChanges } from '@angular/core';


function upperCase(value: string | undefined) {
  if(value) {
    return value.toUpperCase();
  }
  return value;
}
@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  // TODO: Notes from signal input migration:
  //  Input type is incompatible with transform. The migration added an `any`
  //  cast. This worked previously because Angular was unable to check transforms.
  readonly label = input.required<string, string | undefined>({ transform: (upperCase) as any });

}
