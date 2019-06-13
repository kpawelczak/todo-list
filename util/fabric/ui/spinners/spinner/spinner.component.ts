import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { AbstractSpinner } from 'util/fabric/ui/spinners/abstract-spinner';

@Component({
  selector: 'gui-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: [
    'spinner.scss',
    './themes/spinner.dark.scss',
    './themes/spinner.material.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FabricSpinnerComponent extends AbstractSpinner {

  @Input()
  color: string;

  constructor(elementRef: ElementRef,
              renderer: Renderer2) {
    super(elementRef, renderer);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
