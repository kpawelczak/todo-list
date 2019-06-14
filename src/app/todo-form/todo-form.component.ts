import { Component } from '@angular/core';
import { TodoService } from '../todo-list-service/todo-list.service.';
import { TodoItem } from '../todo-list-service/todo-item';


@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  todoText: string = '';
  todoId: number;
  todoItem: TodoItem;
  placeholder: string = 'Title...';

  constructor(private todoService: TodoService) {
  }

  sendTodoItem(): void {
    if (this.todoText === '') {
      this.placeholder = 'You must type in something!';
      return;
    } else {
      this.placeholder = 'Title...';
      this.createTodoItem();
      this.todoService.insertTodoItem(this.todoItem);
    }
  }

  private createTodoItem(): TodoItem {
    this.todoId = Math.round(Math.random() * 1000000);
    return this.todoItem = {
      id: this.todoId,
      text: this.todoText
    };
  }

  clear(): void {
    this.todoService.clearTodoList();
  }

}
