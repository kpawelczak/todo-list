import { ElementRef } from '@angular/core';

export class Geometry {
	private containerHeight: number;
	private containerWidth: number;
	private availableBottomSpace: number;
	private availableTopSpace: number;

	constructor(private container: ElementRef,
				private menu: ElementRef,
				private windowSize: number) {
		this.calculate(this.menu, this.windowSize);
	}

	getContainerHeight(): number {
		return this.containerHeight;
	}

	getContainerWidth(): number {
		return this.containerWidth;
	}

	canOpenDownward(): boolean {
		return this.availableBottomSpace > 0;
	}

	canOpenUpward(): boolean {
		return this.availableTopSpace > 0;
	}

	private calculate(menu: ElementRef, windowSize: number): void {
		const containerEl = this.container.nativeElement,
			menuHeight = menu.nativeElement.offsetHeight,
			rectBottom = containerEl.getBoundingClientRect().bottom;
		this.containerHeight = containerEl.offsetHeight;
		this.containerWidth = containerEl.offsetWidth;
		this.availableBottomSpace = windowSize - rectBottom - menuHeight;
		this.availableTopSpace = rectBottom - menuHeight - this.containerHeight;
	}
}
