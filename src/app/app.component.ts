import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { TodoService } from './todo-list-service/todo-list.service.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService]
})
export class AppComponent implements OnInit {

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.addMaterial();
  }

  addMaterial() {
    this.renderer.addClass(this.elementRef.nativeElement, 'gui-material');
  }
}
