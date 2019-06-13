import { ElementRef, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Geometry } from 'util/fabric/ui/form/modals/geometry';

@Injectable()
export class GeometryService {

	private geometryResults$ = new Subject<Geometry>();

	watchGeometry(): Observable<Geometry> {
		return this.geometryResults$.asObservable();
	}

	changeGeometry(container: ElementRef, menu: ElementRef, windowSize: number): void {

		let geometry = new Geometry(container, menu, windowSize);

		this.geometryResults$.next(geometry);

	}
}
