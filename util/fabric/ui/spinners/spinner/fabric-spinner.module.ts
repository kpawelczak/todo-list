import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricSpinnerComponent } from 'util/fabric/ui/spinners/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FabricSpinnerComponent
  ],
  exports: [
    FabricSpinnerComponent
  ]
})
export class FabricSpinnerModule {
}
