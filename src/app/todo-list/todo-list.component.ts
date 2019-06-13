import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TodoItem } from '../todo-list-service/todo-item';
import { TodoService } from '../todo-list-service/todo-list.service.';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @ViewChild('todoContainer')
  todoListRef: ElementRef;

  todoList: TodoItem[];
  private checked: boolean;

  constructor(private todoService: TodoService,
              private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.getTodoList();
  }

  check(checked, id): void {
    this.checked = checked;
    if (checked) {
      this.setItemChecked(id);
    } else {
      this.removeItemChecked(id);
    }
  }

  private getTodoList() {
    this.todoService.getTodoItems().subscribe(todoItems => this.todoList = todoItems);
  }

  private setItemChecked(id: number): void {
    const itemEl = this.todoListRef.nativeElement.querySelector('[item-id="' + id, '"]');
    this.renderer.addClass(itemEl, 'checked');

  }

  private removeItemChecked(id: number): void {
    const itemEl = this.todoListRef.nativeElement.querySelector('[item-id="' + id, '"]'),
      checkedClass = this.todoListRef.nativeElement.querySelector('.' + 'checked');
    if (checkedClass) {
      this.renderer.removeClass(itemEl, 'checked');
    }
  }

  private delete(item): void {
    this.todoService.delete(item);
  }
}
