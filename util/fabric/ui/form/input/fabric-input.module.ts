import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricInputComponent } from 'util/fabric/ui/form/input/input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FabricInputComponent
  ],
  exports: [
    FabricInputComponent
  ]
})
export class FabricInputModule {
}
