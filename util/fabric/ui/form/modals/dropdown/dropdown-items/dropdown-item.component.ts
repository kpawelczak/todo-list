import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';


@Component({
	selector: 'gui-dropdown-item',
	templateUrl: `dropdown-item.component.html`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class DropdownItemComponent {
}
