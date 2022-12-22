import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildModularComponent } from '../child-modular/child-modular.component';



@NgModule({
  declarations: [
    ChildModularComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ChildModularComponent]
})
export class SharedModule { }
