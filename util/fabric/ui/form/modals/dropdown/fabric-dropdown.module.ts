import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricDropdownComponent } from 'util/fabric/ui/form/modals/dropdown/dropdown.component';
import { DropdownItemComponent } from 'util/fabric/ui/form/modals/dropdown/dropdown-items/dropdown-item.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FabricDropdownComponent,
    DropdownItemComponent
  ],
  exports: [
    FabricDropdownComponent,
    DropdownItemComponent
  ]
})
export class FabricDropdownModule {
}
