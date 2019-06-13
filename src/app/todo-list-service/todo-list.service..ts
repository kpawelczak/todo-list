import { BehaviorSubject, Observable } from 'rxjs';
import { TODOITEMS } from './mock-todo-list';
import { TodoItem } from './todo-item';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  private todoItems$ = new BehaviorSubject(TODOITEMS);
  private todoItems = TODOITEMS;

  getTodoItems(): Observable<TodoItem[]> {
    return this.todoItems$.asObservable();
  }

  insertTodoItem(todoItems: TodoItem) {
    this.todoItems.push(todoItems);
    this.todoItems$.next(this.todoItems);
  }

  clearTodoList() {
    this.todoItems = [];
    this.todoItems$.next(this.todoItems);
  }

  delete(todoItems: TodoItem): void {
    for (let i = 0; i < this.todoItems.length; i++) {
      if (this.todoItems[i] === todoItems) {
        this.todoItems.splice(i, 1);
        i--;
      }
      this.todoItems$.next(this.todoItems);
    }
  }

}
