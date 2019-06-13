import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricSelectComponent } from 'util/fabric/ui/form/select/select.component';

import 'util/fabric/ui/form/select/select.scss';

import 'util/fabric/ui/form/select/themes/select.material.scss';
import 'util/fabric/ui/form/select/themes/select.dark.scss';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricSelectComponent
	],
	exports: [
		FabricSelectComponent
	]
})
export class FabricSelectModule {
}
