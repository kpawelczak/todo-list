import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricProgressSpinnerComponent } from 'util/fabric/ui/spinners/progress-spinner/progress-spinner.component';

import 'util/fabric/ui/spinners/progress-spinner/progress-spinner.scss';

import 'util/fabric/ui/spinners/progress-spinner/themes/progress-spinner.material.scss';
import 'util/fabric/ui/spinners/progress-spinner/themes/progress-spinner.dark.scss';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FabricProgressSpinnerComponent
	],
	exports: [
		FabricProgressSpinnerComponent
	]
})
export class FabricProgressSpinnerModule {
}
